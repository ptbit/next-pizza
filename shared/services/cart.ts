import { axiosInstance } from './axios';
import { ApiRoutes } from './constants';
import { CartDTO, CreateCartItemValues } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(ApiRoutes.CART);

  return data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>(ApiRoutes.CART + '/' + itemId, { quantity });

  return data;
};

export const deleteCartItem = async (itemId: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>(ApiRoutes.CART + '/' + itemId);

  return data;
};

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
  const { data } = await axiosInstance.post<CartDTO>(ApiRoutes.CART + '/', values);

  return data;
};
