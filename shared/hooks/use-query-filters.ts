'use client';

import { useEffect } from 'react';
import { Filters } from './use-filters';
import qs from 'qs';
import { useRouter } from 'next/navigation';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  useEffect(() => {
    const params = {
      ...filters.prices,
      sizes: Array.from(filters.pizzaSizes),
      pizzaTypes: Array.from(filters.pizzaTypes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const queryString = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [router, filters.pizzaSizes, filters.pizzaTypes, filters.prices, filters.selectedIngredients]);
};
