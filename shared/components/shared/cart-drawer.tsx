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
import { useCartStore } from '@/shared/store';
import { Api } from '@/shared/services/api-client';
import { getCartDetails, getCartItemDetails } from '@/shared/lib';
import { BatterType, PizzaSize } from '@/shared/constants/pizza';

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  const fetchCartItems = useCartStore((store) => store.fetchCartItems);
  const totalAmount = useCartStore((store) => store.totalAmount);
  const items = useCartStore((store) => store.items);
  const updateItemQuantity = useCartStore((store) => store.updateItemQuantity);
  const removeCartItem = useCartStore((store) => store.removeCartItem);

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  const onClickDeleteButton = (id: number) => {
    removeCartItem(id)
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee] gap-0'>
        <SheetHeader className='p-8'>
          <SheetTitle>
            В кошику <span className='font-bolt'>{items.length} товари</span>
          </SheetTitle>
        </SheetHeader>

        {/* START ITEMS */}

        <div className='flex-1 overflow-auto'>
          <div className='mb-2'>
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
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
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onClickCountButton={(type) => {
                  onClickCountButton(item.id, item.quantity, type);
                }}
                onClickDeleteButton={() => onClickDeleteButton(item.id)}
              />
            ))}
          </div>
        </div>

        {/* END ITEMS */}

        <SheetFooter className='bg-white p-8'>
          <div className='flex mb-4'>
            <span className='flex flex-1 text-lg text-neutral-500'>
              Всього
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
            </span>
            <span className='font-bold text-lg'> {totalAmount} грн.</span>
          </div>
          <Link href='/cart'>
            <Button type='submit' className='w-full h-12 text-base'>
              Оформити замовлення
              <ArrowRight className='w-5 ml-2' />
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
