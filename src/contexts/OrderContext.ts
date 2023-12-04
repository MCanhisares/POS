import { OrderSummaryType } from '@components/OrderSummary';
import { Discount, MenuItem, items } from '@data/items';
import { calculateOrderSummary } from '@logic/orderLogic';
import { generateRandomId } from '@utils/text';
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';

export type DiscountSelection = {
  selected: boolean;
} & Discount;

export type MenuItemId = {
  id: string;
} & MenuItem;

const useOrder = () => {
  const [currentOrder, setCurrentOrder] = useState<MenuItemId[]>([]);
  const [currentDiscounts, setCurrentDiscounts] = useState<DiscountSelection[]>(
    items.discounts.map((d) => ({ ...d, selected: false }))
  );
  const [orderSummary, setOrderSummary] = useState<OrderSummaryType>({
    rawSubtotal: 0,
    finalTaxes: 0,
    finalDiscounts: 0,
    finalTotal: 0,
  });

  useEffect(() => {
    setOrderSummary(
      calculateOrderSummary(
        currentOrder,
        currentDiscounts.filter((d) => d.selected),
        items.taxes
      )
    );
  }, [currentOrder, currentDiscounts]);

  const addItem = (item: MenuItem) => {
    setCurrentOrder((prevOrder) => [
      ...prevOrder,
      { ...item, id: generateRandomId() },
    ]);
  };

  const removeItem = (item: MenuItemId) => {
    setCurrentOrder((prevOrder) =>
      prevOrder.filter((i) => i.id !== item.id)
    );
  };

  const toggleDiscount = (discount: Discount) => {
    const updatedDiscounts = currentDiscounts.map((d) => {
      if (d.name !== discount.name) {
        return d;
      }
      return {
        ...d,
        selected: !d.selected,
      };
    });
    setCurrentDiscounts(updatedDiscounts);
  };

  return {
    addItem,
    toggleDiscount,
    currentDiscounts,
    currentOrder,
    orderSummary,
    removeItem,
  };
};

export const OrderContext = createContainer(useOrder);
