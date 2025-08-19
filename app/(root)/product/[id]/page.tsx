import { Container, GroupVariants, PizzaImage, Title } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

interface IParams {
  params: { id: string };
}

export default async function ProductPage({ params }: IParams) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });
  console.log('product', product);
  if (!product) {
    return notFound();
  }
  const items = [
    {
      name: 'Маленький',
      value: '20',
    },
    {
      name: 'Середній',
      value: '30',
    },
    {
      name: 'Великий',
      value: '40',
      disabled: true,
    },
  ];
  return (
    <Container className='flex  my-10'>
      <div className='flex flex-1'>
        <PizzaImage
          className='relative mt-10'
          src={product.imgUrl}
          alt={product.name}
          size={'20'}
        />
      </div>
      <div className='w-[490px] bg-[#f3f4f6] p-7'>
        <Title text={product.name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400'>{product.name}</p>
        <GroupVariants items={items} value='20' />
      </div>
    </Container>
  );
}
