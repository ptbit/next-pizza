import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared';
import { pizzasList, snacksList } from '@/lib/data';



export default function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Title text='Всі товари' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-6 pb-14'>
        <div className='flex gap-[60px]'>
          {/* Фильтры */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Товары */}
          <div className='flex-1'>
            <div className='flex flex-wrap gap-16'>
              <ProductsGroupList title={'Піца'} items={pizzasList} />
              <ProductsGroupList title={'Закуски'} items={snacksList} />
            </div>
          </div>
        </div>
      </Container>
      <div className='min-h-2000'></div>
    </>
  );
}
