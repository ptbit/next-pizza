'use client';

import React from 'react';
import { useIntersection } from 'react-use';
import { cn } from '@/shared/lib/utils';
import { ProductCard, Title } from '.';
import { useCategoryStore } from '@/shared/store/category';

type Product = {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  weight: number;
  description: string;
};

interface Props {
  title: string;
  // items: Product[];
  products: any;
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
      <Title size={'md'} text={title} className='font-bold mb-1 mt-3' />
      <div className={cn('grid grid-cols-3 gap-[30px]', listClassName)}>
        {products.map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imgUrl}
              price={product.price || 100}
              weight={product.weight || 0}
              description={product.description || ''}
              ingredients={product.ingredients.map((el: any) => el.name)}
            />
          );
        })}
      </div>
    </section>
  );
};
