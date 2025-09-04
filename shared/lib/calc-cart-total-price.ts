import { CartItemDTO } from '../services/dto/cart.dto';

export const calcCartTotalPrice = (item: CartItemDTO): number => {
  const totalIngredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );
  const pizzaPrice = item.productItem.price;
  const cartTotalPrice = (pizzaPrice + totalIngredientsPrice) * item.quantity;

  return cartTotalPrice;
};
