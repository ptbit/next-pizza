'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = React.useRef(null);

  const onItemClick = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  useClickAway(ref, () => {
    focused && setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    400,
    [searchQuery]
  );

  return (
    <>
      {focused && (
        <div className={cn('fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30')}></div>
      )}

      <div
        className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}
        ref={ref}
      >
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          type='text'
          className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
          placeholder='Пошук...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30',
              focused && 'visible top-12 opacity-100'
            )}
          >
            {products.map((product) => (
              <Link
                href={`/product/${product.id}`}
                className='flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10'
                key={product.id}
                onClick={onItemClick}
              >
                <img
                  className='rounded-sm'
                  src={product.imgUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
