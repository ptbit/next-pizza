import React from 'react';
import { prisma } from '@/prisma/prisma-client';
import { Dialog } from '@radix-ui/react-dialog';
import { notFound } from 'next/navigation';
import { Container, ProductForm } from '@/shared/components/shared';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);

  const product = await prisma.product.findFirst({
    where: { id: productId },
    include: {
      ingredients: true,
      category: {
        include: {
          product: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const items = [
    {
      id: 1,
      name: '2string',
      value: '20',
    },
    {
      id: 2,
      name: '3string',
      value: '30',
    },
    {
      id: 3,
      name: '4string',
      value: '40',
    },
  ];

  return (
    <Container className='flex my-10'>
      <Dialog>
        <ProductForm product={product} />
      </Dialog>
    </Container>
  );
}
