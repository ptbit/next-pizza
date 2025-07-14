'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { cn } from '@/lib/utils';
import { ProductCard, Title } from '.';
import { useCategoryStore } from '@/store/category';

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
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLDivElement>, {
    threshold: 0.4,
  });

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection]);

  return (
    <section className={cn('', className)} id={title} ref={intersectionRef}>
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
    </section>
  );
};
