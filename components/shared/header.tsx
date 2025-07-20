import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Container, SearchInput } from '.';
import { Button, Input } from '../ui';
import { ArrowRight, DollarSign, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        <Link href={'/'}>
          <div className='flex items-center gap-4'>
            <Image src='/logo.png' alt='Logo' width={35} height={35} />
            <div className='flex flex-col'>
              <span className='text-2xl uppercase font-black'>Next Pizza</span>
              <span className='text-base text-gray-400 leading-3'>смачніше вже нікуди</span>
            </div>
          </div>
        </Link>
        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>
        <div className='flex items-center gap-3'>
          <Button className='flex gap-1 hover:bg-orange-400 duration-300'>
            <User />
            Вхід
          </Button>
          <div>
            <Button className='flex items-center gap-2 group hover:bg-orange-400 duration-300'>
              <div className='flex items-center gap-1 '>
                520
                <DollarSign />
              </div>
              <span className='w-[1px] min-h-full bg-white opacity-60'> </span>
              <div className='flex items-center gap-1 relative'>
                <div></div>
                <ShoppingCart className='group-hover:opacity-0 duration-300' />
                <span className='group-hover:opacity-0 duration-300'>3</span>
                <ArrowRight className='absolute opacity-0 right-0 group-hover:opacity-100 duration-300 group-hover:-translate-x-2' />
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
