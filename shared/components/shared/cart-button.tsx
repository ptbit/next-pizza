'use client';
import React from 'react';
import { Button } from '../ui';
import { ArrowRight, DollarSign, ShoppingCart } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { CartDrawer } from '.';
import { useCartStore } from '@/shared/store';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const totalAmount = useCartStore((store) => store.totalAmount);
  const items = useCartStore((store) => store.items);
  const loading = useCartStore((store) => store.loading);
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn('flex items-center gap-2 group hover:bg-orange-400 duration-300', {'w-[105px]': loading}, className)}
      >
        <div className='flex items-center gap-1 '>
          {totalAmount}
          <DollarSign />
        </div>
        <span className='w-[1px] min-h-full bg-white opacity-60'> </span>
        <div className='flex items-center gap-1 relative'>
          <ShoppingCart className='group-hover:opacity-0 duration-300' />
          <span className='group-hover:opacity-0 duration-300'>{cartItemCount}</span>
          <ArrowRight className='absolute opacity-0 right-0 group-hover:opacity-100 duration-300 group-hover:-translate-x-2' />
        </div>
      </Button>
    </CartDrawer>
  );
};
