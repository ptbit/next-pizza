import { cn } from '@/shared/lib/utils';
import React from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import { Button } from '../ui';

type IProduct = {
  ingredients: string;
  items: string;
};

interface Props {
  imageUrl: string;
  name: string;

  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ imageUrl, name, onClickAdd, className }) => {
  const textDetails = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  const totalPrice = 333;

  return (
    <div className={cn('flex flex-1', className)}>
      <div className='flex flex-1 items-center justify-center relative w-full'>
        <img
          src={imageUrl}
          alt={name}
          className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
        />
      </div>

      <div className='w-[490px] bg-[#f3f4f6] p-7'>
        <DialogTitle className='font-extrabold mb-1 text-[22px]'>{name}</DialogTitle>

        <p className='text-gray-400'>{textDetails}</p>

        <Button className='mt-10 w-full h-[55px] px-10 text-base rounded-[18px] cursor-pointer'>
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};
