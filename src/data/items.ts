import data from '@data/restaurant_items.json';

export type Tax = {
  price: number,
  category?: string
};
export type Discount = {
  name: string,
  price: number,
  type: 'flat' | 'percent'
};
export type MenuItem = {
  name: string;
  price: number;
  category: string;
};
export type Menu = {
  title: string;
  data: MenuItem[];
};

export const items = {
  taxes: data.taxes as Tax[],
  discounts: data.discounts as Discount[],
  menu: data.menu as Menu[],
};
