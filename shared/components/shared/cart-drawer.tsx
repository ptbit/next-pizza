'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from '.';

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  const cartItem = {
    id: 1,
    imageUrl: 'string',
    details: 'string',
    name: 'string',
    price: 222,
    quantity: 1,
  };
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee] gap-0'>
        <SheetHeader className='p-8'>
          <SheetTitle>
            В кошику <span className='font-bolt'>3 товари</span>
          </SheetTitle>
        </SheetHeader>

        {/* ITEMS */}
        <div className='flex-1 overflow-auto'>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'./pizza/pepperoni.avif'}
              details={'Піца діаметром 20 см з традиційним тістом'}
              name={'Пепероні'}
              price={222}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className='bg-white p-8'>
          <div className='flex mb-4'>
            <span className='flex flex-1 text-lg text-neutral-500'>
              Всього
              <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
            </span>
            <span className='font-bold text-lg'> {'321'} грн.</span>
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
