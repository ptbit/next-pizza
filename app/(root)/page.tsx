import React from 'react';
import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      product: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className='mt-5'>
        <Title text='Всі товари' size='lg' className='font-extrabold' />
      </Container>

      <TopBar categories={categories.filter((cat) => cat.product.length > 0)} />

      <Container className='mt-6 pb-14'>
        <div className='flex gap-[60px]'>
          {/* Фильтры */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Товары */}
          <div className='flex-1'>
            <div className='flex flex-wrap gap-16'>
              {categories.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  title={category.name}
                  products={category.product}
                  categoryId={category.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
