'use client';

import React from 'react';
import { useCartStore } from '../store';
import { CartStateItem } from '../lib/get-cart-details';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  addCartItem: (values: any) => Promise<void>;
  loading: boolean;

};

export const useCart = ():ReturnProps => {
  const cartState = useCartStore(state => state)

  React.useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
