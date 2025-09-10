import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import crypto from 'crypto';
import { findOrCreateCart, updateCartTotalAmount } from '@/shared/lib';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await findOrCreateCart(token);

    return NextResponse.json(userCart);
  } catch (error) {
    console.error('[CART_GET] Server error', error);

    return NextResponse.json({ message: '[CART_GET] Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);
    const data = (await req.json()) as CreateCartItemValues;

    let findCartItem;

    if (data.ingredientsIds?.length === 0) {
      // кейс: піца без інгредієнтів
      findCartItem = await prisma.cartItem.findFirst({
        where: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          ingredients: { none: {} },
        },
        include: { ingredients: true },
      });
    } else {
      // кейс: піца з інгредієнтами
      findCartItem = await prisma.cartItem.findFirst({
        where: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          ingredients: {
            every: { id: { in: data.ingredientsIds } },
            some: {},
          },
        },
        include: { ingredients: true },
      });
      if (findCartItem && findCartItem.ingredients.length !== data.ingredientsIds?.length) {
        findCartItem = null; // не точний збіг
      }
    }

    // CASE 1: якщо товар знайшовся — просто збільшуємо кількість
    if (findCartItem) {
      await prisma.cartItem.update({
        where: { id: findCartItem.id },
        data: { quantity: findCartItem.quantity + 1 },
      });
    } else {
      // CASE 2: якщо не знайшовся — створюємо новий
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          quantity: 1,
          productItemId: data.productItemId,
          ingredients: { connect: data.ingredientsIds?.map((id) => ({ id })) },
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updatedUserCart);

    resp.cookies.set('cartToken', token);

    return resp;
  } catch (error) {
    console.error('[CART_CREATE] Server error', error);

    return NextResponse.json({ message: 'Cart create server error' }, { status: 500 });
  }
}
