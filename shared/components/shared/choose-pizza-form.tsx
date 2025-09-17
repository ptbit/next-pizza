'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { GroupVariants, IngredientItem, PizzaImage, Title } from '.';
import { Button } from '../ui';
import { BatterType, PizzaSize, batterTypes } from '../../constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';
// import { DialogTitle } from '../ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onSubmit: (productItemId: number, ingredients: number[]) => void;
  className?: string;
  loading?: boolean;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  imageUrl,
  name,
  ingredients,
  items,
  onSubmit,
  className,
  loading,
}) => {
  const {
    selectedPizzaSize,
    selectedBatterType,
    availablePizzaSizes,
    currentItemId,
    setSelectedPizzaSize,
    setSelectedBatterType,
    selectedIngredients,
    addIngredient,
  } = usePizzaOptions(items);

  const handleAddToCartClick = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  const { totalPrice, textDetails } = getPizzaDetails(
    items,
    selectedPizzaSize,
    selectedBatterType,
    ingredients,
    selectedIngredients
  );

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage src={imageUrl} alt={name} size={String(selectedPizzaSize)} />

      <div className='w-[490px] bg-[#f3f4f6] p-7'>
        {/* <Title className='font-extrabold mb-1 text-[22px]' text={name} /> */}
        <DialogTitle className='font-extrabold mb-1 text-[22px]'>{name}</DialogTitle>

        <p className='text-gray-400'>{textDetails}</p>

        <div className='flex flex-col mt-5 gap-2 mb-2'>
          <GroupVariants
            items={availablePizzaSizes}
            value={String(selectedPizzaSize)}
            onClick={(value) => setSelectedPizzaSize(+value as PizzaSize)}
          />

          <GroupVariants
            items={batterTypes}
            value={String(selectedBatterType)}
            onClick={(value) => setSelectedBatterType(+value as BatterType)}
          />
        </div>

        <div className=' rounded-md h-[420px] px-5 pb-1 overflow-auto scrollbar'>
          <div className='grid grid-cols-3 gap-3 '>
            {ingredients.map((ing) => (
              <IngredientItem
                key={ing.id}
                imgUrl={ing.imgUrl}
                name={ing.name}
                price={ing.price}
                className='cursor-pointer'
                active={selectedIngredients.has(ing.id)}
                onClick={() => addIngredient(ing.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          className='mt-10 w-full h-[55px] px-10 text-base rounded-[18px] cursor-pointer'
          onClick={handleAddToCartClick}
        >
          Додати в кошик за {totalPrice} грн.
        </Button>
      </div>
    </div>
  );
};

//10:14
