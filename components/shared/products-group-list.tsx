import React from 'react';
import { cn } from '@/lib/utils';
import { ProductCard, Title } from '.';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  weight: number;
  description: string;
};

interface Props {
  title: string;
  items: Product[];
  className?: string;
  listClassName?: string;
  categoryId?: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  return (
    <div className={cn('', className)}>
      <Title size={'md'} text={title} className='font-bold mb-1 mt-3' />
      <div className={cn('grid grid-cols-3 gap-[30px]', listClassName)}>
        {items.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              weight={product.weight}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
};
