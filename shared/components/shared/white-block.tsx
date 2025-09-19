import { cn } from '@/shared/lib/utils';
import React, { PropsWithChildren } from 'react';
import { Title } from '.';

interface Props {
  contentClassName?: string;
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const WhiteBlock: React.FC<PropsWithChildren<Props>> = ({
  contentClassName,
  title,
  endAdornment,
  className,
  children,
}) => {
  return (
    <div className={cn('bg-white rounded-3xl', className)}>
      {title && (
        <div className='flex items-center justify-between p-5 px-7 border-b border-gray-100'>
          <Title text={title} size='sm' className='font-bold' />
          {endAdornment}
        </div>
      )}
      <div className={cn('px-5 py-4', contentClassName)}>{children}</div>
    </div>
  );
};
