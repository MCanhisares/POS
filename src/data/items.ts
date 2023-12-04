import data from '@data/restaurant_items.json';

export type Taxes = {
  price: number,
  categories: string[]
};
export type Discounts = {
  name: string,
  price: number,
  type: 'flat' | 'percent'
};
export type MenuItem = {
  name: string;
  price: number;
};
export type Menu = {
  title: string;
  data: MenuItem[];
};

export const items = {
  taxes: data.taxes as Taxes[],
  discounts: data.discounts as Discounts[],
  menu: data.menu as Menu[],
};
