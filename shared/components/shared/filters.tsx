'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CheckboxFiltersGroup, RangeSlider, Title } from '.';
import { Input } from '../ui';
import { DollarSign } from 'lucide-react';
import { pizzaSizesList, pizzaTypesList } from '@/shared/lib/data';
import { useQueryFilters, useIngredients, useFilters } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updateRangePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={cn('', className)}>
      <Title text='Фильтри' className='mb-5 font-bold' />

      <CheckboxFiltersGroup
        name='types'
        items={pizzaTypesList}
        title={'Тип тіста:'}
        className='mb-5'
        selectedIds={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
      />

      <CheckboxFiltersGroup
        name='sizes'
        items={pizzaSizesList}
        title={'Розмір:'}
        className='mb-5'
        selectedIds={filters.pizzaSizes}
        onClickCheckbox={filters.setPizzaSizes}
      />

      <div className='mt-5 border-y border-y-neutral-300 py-6 pb-7'>
        <p className='font-bold mb-3'>Ціна від і до:</p>
        <div className='flex gap-4'>
          <div className='relative flex items-center'>
            <Input
              placeholder='0'
              min={0}
              max={1000}
              value={String(filters.prices.priceFrom || 100)}
              onChange={(e) => filters.setPrices('priceFrom', +e.target.value)}
            />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
          <div className='relative flex items-center'>
            <Input
              placeholder='1000'
              min={100}
              max={1000}
              value={String(filters.prices.priceTo || 1000)}
              onChange={(e) => filters.setPrices('priceTo', +e.target.value)}
            />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
        </div>
        <RangeSlider
          min={100}
          max={1000}
          step={10}
          className='mt-4'
          value={[filters.prices.priceFrom || 100, filters.prices.priceTo || 1000]}
          onValueChange={updateRangePrices}
        />
      </div>

      <CheckboxFiltersGroup
        name='ingredients'
        items={items}
        defaultItems={items.slice(0, 6)}
        title={'Інгредієнти:'}
        limit={6}
        className='mt-5'
        loading={loading}
        selectedIds={filters.selectedIngredients}
        onClickCheckbox={filters.setIngredients}
      />
    </div>
  );
};
