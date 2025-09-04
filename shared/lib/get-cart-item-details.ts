import { BatterType, PizzaSize, mapBatterType } from '../constants/pizza';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaSize: PizzaSize,
  batterType: BatterType,
): string => {
  const details = [];

  if (pizzaSize && batterType) {
    const typeName = mapBatterType[batterType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
