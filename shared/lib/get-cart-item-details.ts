import { Ingredient } from '@prisma/client';
import { BatterType, PizzaSize, mapBatterType } from '../constants/pizza';

export const getCartItemDetails = (
  pizzaSize: PizzaSize,
  batterType: BatterType,
  ingredients: Ingredient[]
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
