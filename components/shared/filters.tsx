'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';
import { DollarSign } from 'lucide-react';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import { pizzaSizesList, pizzaTypesList } from '@/lib/data';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get('pizzaTypes')?.split(','));
  const { ingredients, loading, selectedIngredients, onAddId } = useFilterIngredients();
  const [prices, setPrices] = React.useState<PriceProps>({});

  const [pizzaSizes, { toggle: togglePizzaSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  const changePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  const filterItems = ingredients.map((el) => ({
    text: el.name,
    value: String(el.id),
    checked: false,
  }));

  useEffect(() => {
    const filters = {
      ...prices,
      sizes: Array.from(pizzaSizes),
      pizzaTypes: Array.from(pizzaTypes),
      ingredients: Array.from(selectedIngredients),
    };

    const queryString = qs.stringify(filters, { arrayFormat: 'comma' });
    router.push(`?${queryString}`, {
      scroll: false,
    });
    console.log('Filters:', filters, queryString);
  }, [prices, pizzaSizes, pizzaTypes, selectedIngredients]);

  return (
    <div className={cn('', className)}>
      <Title text='Фильтри' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        name='types'
        items={pizzaTypesList}
        title={'Тип тіста:'}
        className='mb-5'
        selectedIds={pizzaTypes}
        onClickCheckbox={togglePizzaTypes}
      />

      <CheckboxFiltersGroup
        name='sizes'
        items={pizzaSizesList}
        title={'Розмір:'}
        className='mb-5'
        selectedIds={pizzaSizes}
        onClickCheckbox={togglePizzaSizes}
      />

      <div className='mt-5 border-y border-y-neutral-300 py-6 pb-7'>
        <p className='font-bold mb-3'>Ціна від і до:</p>
        <div className='flex gap-4'>
          <div className='relative flex items-center'>
            <Input
              placeholder='0'
              min={0}
              max={1000}
              value={String(prices.priceFrom || 100)}
              onChange={(e) => changePrice('priceFrom', +e.target.value)}
            />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
          <div className='relative flex items-center'>
            <Input
              placeholder='1000'
              min={100}
              max={1000}
              value={String(prices.priceTo || 1000)}
              onChange={(e) => changePrice('priceTo', +e.target.value)}
            />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
        </div>
        <RangeSlider
          min={100}
          max={1000}
          step={10}
          className='mt-4'
          value={[prices.priceFrom || 100, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => setPrices({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        name='ingredients'
        items={filterItems}
        defaultItems={filterItems.slice(0, 6)}
        title={'Інгредієнти:'}
        limit={6}
        className='mt-5'
        loading={loading}
        selectedIds={selectedIngredients}
        onClickCheckbox={onAddId}
      />
    </div>
  );
};
