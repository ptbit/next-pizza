'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const isPizza = product.categoryId === 1;
  // const isPizza = product.ingredients.length > 0;
  // const isPizza = Boolean(product.items[0]?.pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        {isPizza ? (
          <ChoosePizzaForm
            imageUrl={product.imgUrl}
            ingredients={product.ingredients}
            name={product.name}
            items={product.items}
            onClickAddCart={() => {}}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imgUrl} name={product.name} onClickAdd={() => {}} />
        )}
      </DialogContent>
    </Dialog>
  );
};
