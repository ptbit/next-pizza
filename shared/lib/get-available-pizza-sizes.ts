import { ProductItem } from '@prisma/client';
import { BatterType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';

export const getAvailablePizzaSizes = (
  items: ProductItem[],
  selectedBatterType: BatterType
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === selectedBatterType);

  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => pizza.size === +item.value),
  }));

  return availablePizzaSizes;
};
