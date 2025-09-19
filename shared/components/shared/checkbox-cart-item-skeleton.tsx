import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const CheckboxCartItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn('flex items-center justify-between', className)}>
        <div className='flex items-center gap-5 flex-1'>
          <div className='w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse' />
          <div className='flex flex-col gap-2 flex-1 ml-2'>
            <h2 className='w-40 h-5 bg-gray-200 rounded-full animate-pulse' />
            <h2 className='w-[90%] h-5 bg-gray-200 rounded-full animate-pulse' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-[150px] h-[40px] bg-gray-200 rounded-full animate-pulse' />
        </div>
      </div>
      <div className={cn('flex items-center justify-between', className)}>
        <div className='flex items-center gap-5 flex-1'>
          <div className='w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse' />
          <div className='flex flex-col gap-2 flex-1 ml-2'>
            <h2 className='w-40 h-5 bg-gray-200 rounded-full animate-pulse' />
            <h2 className='w-[90%] h-5 bg-gray-200 rounded-full animate-pulse' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-[150px] h-[40px] bg-gray-200 rounded-full animate-pulse' />
        </div>
      </div>
      <div className={cn('flex items-center justify-between', className)}>
        <div className='flex items-center gap-5 flex-1'>
          <div className='w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse' />
          <div className='flex flex-col gap-2 flex-1 ml-2'>
            <h2 className='w-40 h-5 bg-gray-200 rounded-full animate-pulse' />
            <h2 className='w-[90%] h-5 bg-gray-200 rounded-full animate-pulse' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='w-[150px] h-[40px] bg-gray-200 rounded-full animate-pulse' />
        </div>
      </div>
    </>
  );
};
