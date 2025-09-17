'use client';

import React from 'react';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm, ChooseProductForm } from '.';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  onSuccess?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSuccess }) => {
  const firstItem = product.items[0];
  const isPizza = product.categoryId === 1;
  const productPrice = product.items[0].price;
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
      onSuccess?.();
      // router.back();
    } catch (error) {
      toast.error(`Помилка додавання ${product.name} у кошик`);
      console.error(error);
    }
  };

  if (isPizza)
    return (
      <ChoosePizzaForm
        imageUrl={product.imgUrl}
        ingredients={product.ingredients}
        name={product.name}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );

  return (
    <ChooseProductForm
      imageUrl={product.imgUrl}
      name={product.name}
      price={productPrice}
      onClickAdd={() => onSubmit(firstItem.id)}
      loading={loading}
    />
  );
};
