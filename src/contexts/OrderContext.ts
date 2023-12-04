import { OrderSummaryType } from '@components/OrderSummary';
import { Discount, MenuItem, items } from '@data/items';
import { calculateOrderSummary } from '@logic/orderLogic';
import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';

export type DiscountSelection = {
  selected: boolean;
} & Discount;

const useOrder = () => {
  const [currentOrder, setCurrentOrder] = useState<MenuItem[]>([]);
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
    setCurrentOrder((prevOrder) => [...prevOrder, item]);
  };

  const removeItem = (item: MenuItem) => {
    setCurrentOrder((prevOrder) =>
      prevOrder.filter((i) => i.name !== item.name)
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
