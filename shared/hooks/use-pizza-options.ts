import React from 'react';
import { BatterType, PizzaSize } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';
import { getAvailablePizzaSizes } from '../lib';
import { ProductItem } from '@prisma/client';
import { useSet } from 'react-use';

interface ReturnProps {
  selectedPizzaSize: PizzaSize;
  selectedBatterType: BatterType;
  availablePizzaSizes: Variant[];
  setSelectedPizzaSize: (size: PizzaSize) => void;
  setSelectedBatterType: (type: BatterType) => void;
  selectedIngredients: Set<number>;
  addIngredient:(key: number) => void
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [selectedPizzaSize, setSelectedPizzaSize] = React.useState<PizzaSize>(20);
  const [selectedBatterType, setSelectedBatterType] = React.useState<BatterType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));
  
  const availablePizzaSizes = getAvailablePizzaSizes(items, selectedBatterType);

  React.useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => +item.value === selectedPizzaSize && !item.disabled
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSelectedPizzaSize(+availableSize.value as PizzaSize);
    }
  }, [selectedBatterType]);

  return {
    selectedPizzaSize,
    selectedBatterType,
    availablePizzaSizes,
    setSelectedPizzaSize,
    setSelectedBatterType,
    selectedIngredients,
    addIngredient,
  };
};
