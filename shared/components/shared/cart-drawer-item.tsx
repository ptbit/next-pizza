import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CartItemProps } from './cart-item-details/cart-item-details.types';

import * as CartItem from './cart-item-details';
import { getCartItemDetails } from '@/shared/lib';
import { CountButton } from '.';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickDeleteButton?: () => void;
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  details,
  price,
  quantity,
  className,
  onClickCountButton,
  onClickDeleteButton
}) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.Image src={imageUrl} />
      <div className='flex-1'>
        <CartItem.Info name={name} details={details}></CartItem.Info>

        <hr className='my-3' />

        <div className='flex items-center justify-between'>
          <CountButton value={quantity} onClick={onClickCountButton} />
          <div className='flex items-center gap-3'>
            <CartItem.Price value={price} />
            <Trash2Icon size={16} className='text-gray-400 cursor-pointer hover:text-gray-600' onClick={onClickDeleteButton}/>
          </div>
        </div>
      </div>
    </div>
  );
};
