'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';

interface Props {
  items: Category[];
  className?: string;
}
export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((store) => store.activeId);

  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-100 rounded-2xl p-1', className)}>
      {items.map((cat) => {
        return (
          <a
            key={cat.id}
            className={cn(
              'flex items-center h-11 font-bold rounded-2xl cursor-pointer px-5 hover:bg-[white] duration-300 hover:shadow-md hover:shadow-gray-200',
              categoryActiveId === cat.id && 'bg-white text-primary shadow-md shadow-gray-200'
            )}
            href={`#${cat.name}`}
          >
            {cat.name}
          </a>
        );
      })}
    </div>
  );
};
