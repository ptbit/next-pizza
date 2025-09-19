import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CheckoutItemDetails, WhiteBlock } from '.';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button } from '../ui';
import { DELIVERY_PRICE, TAX_PERCENTAGE } from '@/shared/constants/global';

interface Props {
  totalAmount: number;
  className?: string;
}

export const CheckoutCartSide: React.FC<Props> = ({ totalAmount, className }) => {
  const taxSize = ((totalAmount * TAX_PERCENTAGE) / 100).toFixed();
  const orderTotalPrice = totalAmount + +taxSize + DELIVERY_PRICE;

  return (
    <div className={cn('', className)}>
      <WhiteBlock className='p-6 sticky top-4'>
        <div className='flex gap-1 items-center justify-between'>
          <span className='text-xl'>Всього:</span>
          <span className='text-[34px] font-extrabold'>{orderTotalPrice} грн</span>
        </div>

        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Package size={20} className='mr-2 text-gray-400' />
              Вартість товарів:
            </div>
          }
          value={totalAmount.toString()}
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Percent size={20} className='mr-2 text-gray-400' />
              Податки:
            </div>
          }
          value={taxSize}
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center'>
              <Truck size={20} className='mr-2 text-gray-400' />
              Доставка:
            </div>
          }
          value={DELIVERY_PRICE.toString()}
        />

        <Button
          type='submit'
          className='w-full h-14 rounded-2xl mt-6 text-base font-bold cursor-pointer'
        >
          Перейти до оплати
          <ArrowRight className='w-5 ml-2' />
        </Button>
      </WhiteBlock>
    </div>
  );
};
