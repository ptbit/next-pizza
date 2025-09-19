'use client';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from '.';
import { getCartItemDetails } from '@/shared/lib';
import { BatterType, PizzaSize } from '@/shared/constants/pizza';
import Image from 'next/image';
import { useCart } from '@/shared/hooks';

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  const onClickDeleteButton = (id: number) => {
    removeCartItem(id);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee] gap-0'>
        {totalAmount > 0 ? (
          <>
            <SheetHeader className='p-8'>
              <SheetTitle>
                В кошику <span className='font-bolt'>{items.length} товари</span>
              </SheetTitle>
            </SheetHeader>

            <div className='flex-1 overflow-auto'>
              {items.map((item) => (
                <div className='mb-2' key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={
                      item.pizzaSize
                        ? getCartItemDetails(
                            item.ingredients,
                            item.pizzaSize as PizzaSize,
                            item.pizzaType as BatterType
                          )
                        : ''
                    }
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) => {
                      onClickCountButton(item.id, item.quantity, type);
                    }}
                    onClickDeleteButton={() => onClickDeleteButton(item.id)}
                  />
                </div>
              ))}
            </div>

            <SheetFooter className='bg-white p-8'>
              <div className='flex mb-4'>
                <span className='flex flex-1 text-lg text-neutral-500'>
                  Всього
                  <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                </span>
                <span className='font-bold text-lg'> {totalAmount} грн.</span>
              </div>
              <Link href='/checkout'>
                <Button type='submit' className='w-full h-12 text-base' loading={loading}>
                  Оформити замовлення
                  <ArrowRight className='w-5 ml-2' />
                </Button>
              </Link>
            </SheetFooter>
          </>
        ) : (
          <div className='flex flex-col justify-center items-center w-72 mx-auto h-full'>
            <SheetHeader className='py-8'>
              <SheetTitle className='text-center text-2xl'>Кошик порожній</SheetTitle>
              <span className='text-sm text-gray-500'>Але це ніколи не пізно виправити {`:)`}</span>
            </SheetHeader>
            <Image
              src='/assets/images/empty-box.png'
              alt='no items in cart'
              width={120}
              height={120}
            />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
