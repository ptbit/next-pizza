import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

interface Props {
  imgUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  imgUrl,
  name,
  price,
  active,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'border rounded-md p-1 bg-white flex items-center flex-col text-center relative w-32 shadow-md select-none',
        { 'border-primary': active },
        className
      )}
    >
      {active && <CircleCheck className='absolute right-2 top-2 text-primary' strokeWidth={1.5} />}
      <div className='w-[88px] h-[88px]'>
        <img src={imgUrl} alt={name} className='' />
      </div>
      <p className=' text-[14px] text-gray-800 mb-auto'>{name}</p>
      <p className=''>{price} грн</p>
    </div>
  );
};
