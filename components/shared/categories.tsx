import React from 'react';
import { cn } from '@/lib/utils';
import { topBarCategories } from '@/lib/data';

interface Props {
  className?: string;
}

const activeIndex = 2;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-100 rounded-2xl p-1', className)}>
      {topBarCategories.map((cat, index) => {
        return (
          <a
            key={index}
            className={cn(
              'flex items-center h-11 font-bold rounded-2xl cursor-pointer px-5 hover:bg-[white] duration-300 hover:shadow-md hover:shadow-gray-200',
              activeIndex === index && 'bg-white text-primary shadow-md shadow-gray-200'
            )}
          >
            {/* <button className='cursor-pointer'>{cat}</button> */}
            {cat}
          </a>
        );
      })}
    </div>
  );
};
