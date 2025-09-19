'use client';
import React from 'react';

import {
  CheckboxCartItem,
  CheckboxCartItemSkeleton,
  CheckoutCartSide,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Input, Textarea } from '@/shared/components/ui';
import { getCartItemDetails } from '@/shared/lib';
import { BatterType, PizzaSize } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks';

export default function Checkout() {
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  const onClickRemove = (id: number) => {
    removeCartItem(id);
  };

  return (
    <Container className='mt-5'>
      <Title text='Оформлення замовлення' className='font-extrabold mb-8 text-[36px]' />
      <div className='flex gap-10'>
        {/* LEFT PART */}
        <div className='flex flex-col gap-8 flex-1 mb-20'>
          <WhiteBlock title='1. Кошик'>
            <div className='flex flex-col gap-4'>
              {items.length > 0 ? (
                items.map((item) => (
                  <div className='mb-2' key={item.id}>
                    <CheckboxCartItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaSize as PizzaSize,
                        item.pizzaType as BatterType
                      )}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      disabled={item.disabled}
                      onClickCountButton={(type) => {
                        onClickCountButton(item.id, item.quantity, type);
                      }}
                      onClickRemove={() => onClickRemove(item.id)}
                    />
                  </div>
                ))
              ) : (
                <CheckboxCartItemSkeleton />
              )}
            </div>
          </WhiteBlock>

          <WhiteBlock title='2. Отримувач'>
            <div className='grid grid-cols-2 gap-4'>
              <Input name='firstName' className='text-base' placeholder={`Ім'я`} />
              <Input name='lastName' className='text-base' placeholder='Призвіще' />
              <Input name='email' className='text-base' placeholder='E-mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>
          <WhiteBlock title='2. Отримувач'>
            <div className='grid grid-cols-2 gap-4'>
              <Input name='firstName' className='text-base' placeholder={`Ім'я`} />
              <Input name='lastName' className='text-base' placeholder='Призвіще' />
              <Input name='email' className='text-base' placeholder='E-mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>
          <WhiteBlock title='2. Отримувач'>
            <div className='grid grid-cols-2 gap-4'>
              <Input name='firstName' className='text-base' placeholder={`Ім'я`} />
              <Input name='lastName' className='text-base' placeholder='Призвіще' />
              <Input name='email' className='text-base' placeholder='E-mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>
          <WhiteBlock title='3. Доставка'>
            <div className='flex flex-col gap-5'>
              <Input name='firstName' className='text-base' placeholder='Адреса' />
              <Textarea rows={5} className='text-base' placeholder='Коментар до замовлення' />
            </div>
          </WhiteBlock>
        </div>

        {/* RIGHT PART */}
        <div className='w-[450px]'>
          {loading && (
            <WhiteBlock>
              <div className='flex items-center gap-5 flex-1 flex-col'>
                <div className='h-40 w-full bg-gray-200 rounded-xl animate-pulse mb-4' />
                <div className='h-13 w-full bg-gray-200 rounded-xl animate-pulse' />
              </div>
            </WhiteBlock>
          )}
          {!loading && <CheckoutCartSide totalAmount={totalAmount} />}
        </div>
      </div>
    </Container>
  );
}
