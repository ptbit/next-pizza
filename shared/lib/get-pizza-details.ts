import { Ingredient, ProductItem } from '@prisma/client';
import { CalcTotalPizzaPrice } from '.';
import { BatterType, PizzaSize, mapBatterType } from '../constants/pizza';

interface ReturnProps {
  totalPrice: number;
  textDetails: string;
}

export const getPizzaDetails = (
  items: ProductItem[],
  selectedPizzaSize: PizzaSize,
  selectedBatterType: BatterType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
): ReturnProps => {
  const totalPrice = CalcTotalPizzaPrice(
    items,
    selectedPizzaSize,
    selectedBatterType,
    ingredients,
    selectedIngredients
  );

  const textDetails = `Піца діаметром ${selectedPizzaSize} см з ${mapBatterType[selectedBatterType]
    .toLowerCase()
    .slice(0, -1)}им тістом`;

  return { totalPrice, textDetails };
};
