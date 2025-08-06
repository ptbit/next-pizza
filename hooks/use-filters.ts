'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  pizzaSizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (key: string) => void;
  setPizzaSizes: (key: string) => void;
  setIngredients: (key: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',')));
  const [pizzaSizes, { toggle: setPizzaSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',')));
  const [selectedIngredients, { toggle }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',')));

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return {
    pizzaSizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setPizzaTypes,
    setPizzaSizes,
    setIngredients: toggle,
  };
};
