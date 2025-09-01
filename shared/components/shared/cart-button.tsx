import React from 'react';
import { Button } from '../ui';
import { ArrowRight, DollarSign, ShoppingCart } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { CartDrawer } from '.';

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button
        className={cn('flex items-center gap-2 group hover:bg-orange-400 duration-300', className)}
      >
        <div className='flex items-center gap-1 '>
          520
          <DollarSign />
        </div>
        <span className='w-[1px] min-h-full bg-white opacity-60'> </span>
        <div className='flex items-center gap-1 relative'>
          <div></div>
          <ShoppingCart className='group-hover:opacity-0 duration-300' />
          <span className='group-hover:opacity-0 duration-300'>3</span>
          <ArrowRight className='absolute opacity-0 right-0 group-hover:opacity-100 duration-300 group-hover:-translate-x-2' />
        </div>
      </Button>
    </CartDrawer>
  );
};
