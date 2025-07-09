import React from 'react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (

    <Popover>
      <PopoverTrigger
        className={cn(
          'inline-flex items-center gap-1 bg-gray-100 rounded-2xl px-5 h-[52px] cursor-pointer',
          className
        )}
      >
        <ArrowUpDown size={16} />
        <b>Сортування:</b>
        <b className='text-primary'>по рейтингу</b>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};
