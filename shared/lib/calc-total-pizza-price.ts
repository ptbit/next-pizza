import { Ingredient, ProductItem } from '@prisma/client';
import { BatterType, PizzaSize } from '../constants/pizza';

/**
 * Функція для вираховування загальної вартості піци
 * 
 * @param items - список варіацій піци
 * @param selectedPizzaSize - вибраний розмір піци
 * @param selectedBatterType - вибраний тип тіста для піци
 * @param ingredients - список усіх інгридієнтів
 * @param selectedIngredients - список вибраних (додаткових) інгридієнтів
 * @returns number загальна вартість піци
 */

export const CalcTotalPizzaPrice = (
  items: ProductItem[],
  selectedPizzaSize: PizzaSize,
  selectedBatterType: BatterType,
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === selectedBatterType && item.size === selectedPizzaSize)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
