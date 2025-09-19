import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import * as CartItem from './cart-item-details';
import { CountButton } from '.';
import { Trash2Icon, X } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props extends CartItemProps {
  onClickRemove?: () => void;
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CheckboxCartItem: React.FC<Props> = ({
  imageUrl,
  name,
  details,
  price,
  quantity,
  disabled,
  className,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}
    >
      <div className='flex items-center gap-5 flex-1'>
        <CartItem.Image src={imageUrl} />
        <CartItem.Info name={name} details={details} />
      </div>
      <CartItem.Price value={price} className='ml-4' />
      <div className='flex items-center gap-5 ml-4'>
        <CartItem.CountButton onClick={onClickCountButton} value={quantity} />
        <button onClick={onClickRemove}>
          <X className='text-gray-400 cursor-pointer hover:text-gray-600' size={20} />
        </button>
      </div>
    </div>
  );
};
