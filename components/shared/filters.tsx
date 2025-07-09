import React from 'react';
import { cn } from '@/lib/utils';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from '.';
import { Input } from '../ui';
import { DollarSign } from 'lucide-react';
import { checkboxList } from '@/lib/data';

interface Props {
  className?: string;
}



export const Filters: React.FC<Props> = ({ className }) => {
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
            <Input placeholder='0' min={0} max={1000} defaultValue={100} />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
          <div className='relative flex items-center'>
            <Input placeholder='1000' min={100} max={1000} defaultValue={500} />
            <DollarSign className='absolute right-2 text-gray-300 h-[19px]' />
          </div>
        </div>
        <RangeSlider min={0} max={1000} step={1}  className='mt-4' />
      </div>

      <CheckboxFiltersGroup
        items={checkboxList}
        defaultItems={checkboxList}
        title={'Інгредієнти:'}
        limit={6}
        className='mt-5'
      />
    </div>
  );
};
