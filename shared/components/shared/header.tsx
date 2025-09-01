import React from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { CartButton, Container, SearchInput } from '.';
import { Button } from '../ui';
import { User } from 'lucide-react';
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
              <span className='text-base text-gray-400 leading-3'>твоя наступна піца</span>
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
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
