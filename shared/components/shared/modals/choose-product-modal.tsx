'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Dialog } from '@/shared/components/ui';
import { DialogContent } from '@/shared/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizza = product.categoryId === 1;

  //TODO fix product items in base for right product price
  const productPrice = product.items[0] ? product.items[0].price : 1;
  const addCartItem = useCartStore((store) => store.addCartItem);
  const loading = useCartStore((store) => store.loading);

  const onSubmit = async (productItemId?: number, ingredientsIds?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredientsIds,
      });

      const toastMessage = isPizza
        ? `Піцца ${product.name} додана в кошик`
        : `${product.name} додано в кошик`;

      toast.success(toastMessage);
      router.back();
    } catch (error) {
      toast.error(`Помилка додавання ${product.name} у кошик`);
      console.error(error);
    }
  };

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
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imgUrl}
            name={product.name}
            price={productPrice}
            onClickAdd={() => onSubmit(firstItem.id)}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
