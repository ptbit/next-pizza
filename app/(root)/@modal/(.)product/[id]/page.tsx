import { ChooseProductModal } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

interface IParams {
  params: { id: string };
}
export default async function ProductModalPage({ params }: IParams) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }
  return <ChooseProductModal product={product} className='max-w-none! '></ChooseProductModal>;
}
