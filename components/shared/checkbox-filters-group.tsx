'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox } from '.';
import { FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  title?: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string;

  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Пошук...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const list = showAll
    ? items.filter((item) => item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : defaultItems.slice(0, limit);

  return (
    <div className={cn('', className)}>
      {title && <p className='font-bold mb-3'>{title}</p>}

      <div className='mb-5'>
        <Input
          className={cn('bg-gray-100 border-none ', !showAll && 'hidden')}
          placeholder={searchInputPlaceholder}
          value={search}
          onChange={onChangeSearch}
        />
      </div>

      <div className='flex flex-col gap-3 max-h-96 overflow-y-auto scrollbar'>
        {list.length === 0 ? (
          <>Не знайдено</>
        ) : (
          list.map((item, index) => {
            return (
              <FilterCheckbox
                key={index}
                text={item.text}
                value={item.value + title}
                checked={false}
                onCheckedChange={(ids) => console.log(ids)}
              />
            );
          })
        )}

        {items.length > limit && (
          <div className={showAll ? 'border-t border-t-neutral-200 mt-4' : ''}>
            <button
              className={cn('text-primary mt-3 cursor-pointer')}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Приховати' : '+ Показати всі'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
