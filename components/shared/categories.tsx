'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { topBarCategories } from '@/lib/data';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}
export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((store) => store.activeId);

  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-100 rounded-2xl p-1', className)}>
      {topBarCategories.map((cat) => {
        return (
          <a
            key={cat.id}
            className={cn(
              'flex items-center h-11 font-bold rounded-2xl cursor-pointer px-5 hover:bg-[white] duration-300 hover:shadow-md hover:shadow-gray-200',
              categoryActiveId === cat.id && 'bg-white text-primary shadow-md shadow-gray-200'
            )}
            href={`#${cat.name}`}
          >
            {/* <button className='cursor-pointer'>{cat}</button> */}
            {cat.name}
          </a>
        );
      })}
    </div>
  );
};
