'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { cn } from '@/shared/lib/utils';
import { ProductCard, Title } from '.';
import { useCategoryStore } from '@/shared/store';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  title: string;
  products: ProductWithRelations[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
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
      {products.length > 0 && <Title size={'md'} text={title} className='font-bold mb-1 mt-3' />}

      <div className={cn('grid grid-cols-3 gap-[30px]', listClassName)}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imgUrl}
              price={product.items[0].price}
              ingredients={product.ingredients}
            />
          );
        })}
      </div>
    </section>
  );
};
