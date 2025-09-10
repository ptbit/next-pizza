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
  price: number;

  onClickAdd?: VoidFunction;
  className?: string;
  loading?: boolean;
}

export const ChooseProductForm: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  onClickAdd,
  className,
  loading,
}) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className='flex flex-1 items-center justify-center relative w-full'>
        <img
          src={imageUrl}
          alt={name}
          className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
        />
      </div>

      <div className='w-[490px] bg-[#f3f4f6] p-7 flex flex-col justify-between'>
        <DialogTitle className='font-extrabold mb-1 text-[22px]'>{name}</DialogTitle>

        <Button
          className='mt-10 w-full h-[55px] px-10 text-base rounded-[18px] cursor-pointer'
          onClick={onClickAdd}
          loading={loading}
        >
          Додати в кошик за {price} грн.
        </Button>
      </div>
    </div>
  );
};
