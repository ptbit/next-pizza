'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox } from '.';
import { FilterCheckboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';

interface Props {
  title?: string;
  items: FilterCheckboxProps[];
  defaultItems?: FilterCheckboxProps[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  // defaultValue?: string;
  selectedIds: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Пошук...',
  className,
  loading,
  selectedIds,
  onClickCheckbox,
  // defaultValue,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return (
      <div className={cn('', className)}>
        {title && <p className='font-bold mb-3'>{title}</p>}
        <div className='flex flex-col gap-3'>
          {Array(limit)
            .fill(0)
            .map((_, id) => (
              <Skeleton key={id} className='h-[24px] w-full rounded-xl' />
            ))}
        </div>
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) => item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : (defaultItems || items).slice(0, limit);

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
                checked={selectedIds.has(item.value)}
                onCheckedChange={() => onClickCheckbox?.(item.value)}
                name={name}
              />
            );
          })
        )}
      </div>
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
  );
};
