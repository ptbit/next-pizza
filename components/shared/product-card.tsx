import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Title } from '.';
import { Plus } from 'lucide-react';
import { Button } from '../ui';

interface Props {
  id: number;
  name: string;
  price: number;
  weight: number;
  description: string;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  weight,
  description,
  imageUrl,
  className,
}) => {
  const noDescription = description === '';
  return (
    <div className={cn('max-w-min flex flex-col', className)}>
      <Link href={'/'}>
        <div
          className={cn(
            'flex flex-col p-6 bg-secondary rounded-lg h-[260px]',
            noDescription && 'h-[200px]'
          )}
        >
          <img
            className={cn('flex min-w-[215px] h-[215px]', noDescription && 'h-[165px]')}
            src={imageUrl}
            alt={name}
          />
        </div>
      </Link>

      <Title className='font-bold mb-1 mt-3' text={name} />
      <p className='text-sm text-gray-400 mb-3'>
        <span className='text-primary font-bold'>{weight} г </span>
        {!noDescription && `- ${description}`}
      </p>
      <div className='mt-auto flex items-center justify-between '>
        <div className='flex items-center'>
          <span className='text-[20px]'>
            від <b>{price}</b> грн
          </span>
        </div>
        <Button variant='secondary' className='text-base font-bold text-primary '>
          <Plus className='mr-1' size={20} />
          Замовити
        </Button>
      </div>
    </div>
  );
};
