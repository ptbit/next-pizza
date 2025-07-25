import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '../ui';

export interface FilterCheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  name?: string ;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  checked,
  name,
  className,
  onCheckedChange,
}) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Checkbox
        id={`checkbox-${name}-${String(value)}`}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className='rounded-[8px] w-6 h-6'
      />
      <label
        className='cursor-pointer leading-none flex-1 select-none'
        htmlFor={`checkbox-${name}-${String(value)}`}
      >
        {text}
      </label>
    </div>
  );
};
