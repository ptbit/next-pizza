export const mapSizes = {
  20: 'Маленька',
  30: 'Середня',
  40: 'Велика',
};

export const mapBatterType = {
  1: 'Традиційне',
  2: 'Тонке',
};

export const pizzaSizes = Object.entries(mapSizes).map(([value, name]) => ({
  name,
  value,
}));
export const batterTypes = Object.entries(mapBatterType).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapSizes;
export type BatterType = keyof typeof mapBatterType;
