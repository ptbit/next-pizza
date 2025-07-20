'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';
import { DollarSign } from 'lucide-react';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 100,
    priceTo: 1000,
  });

  const changePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  const filterItems = ingredients.map((el) => ({
    text: el.name,
    value: String(el.id),
    checked: false,
  }));

  useEffect(() => {
    console.log('prices', prices);
  }, [prices]);

  return (
    <div className={cn('', className)}>
      <Title text='Фильтри' className='mb-5 font-bold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можна збирати' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-300 py-6 pb-7'>
        <p className='font-bold mb-3'>Ціна від і до:</p>
        <div className='flex gap-4'>
          <div className='relative flex items-center'>
            <Input
              placeholder='0'
              min={0}
              max={1000}
              value={String(prices.priceFrom)}
              onChange={(e) => changePrice('priceFrom', +e.target.value)}
            />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
          <div className='relative flex items-center'>
            <Input
              placeholder='1000'
              min={100}
              max={1000}
              value={String(prices.priceTo)}
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
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrices({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        items={filterItems}
        defaultItems={filterItems.slice(0, 6)}
        title={'Інгредієнти:'}
        limit={6}
        className='mt-5'
        loading={loading}
        selectedIds={selectedIds}
        onClickCheckbox={onAddId}
      />
    </div>
  );
};
