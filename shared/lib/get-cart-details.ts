import { calcCartTotalPrice } from '.';
import { CartDTO } from '../services/dto/cart.dto';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnedProps {
  totalAmount: number;
  items: CartStateItem[];
}

export const getCartDetails = (data: CartDTO): ReturnedProps => {

  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imgUrl,
    price: calcCartTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  }));

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
