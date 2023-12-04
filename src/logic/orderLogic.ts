import { Discount, MenuItem, Tax } from '@data/items';

export const calculateOrderSummary = (
  items: MenuItem[],
  discounts: Discount[],
  taxes: Tax[]
) => {
  const rawSubtotal = items.reduce((prev, cur) => prev + cur.price, 0);
  const finalTaxes = calculateTaxes(rawSubtotal, items, taxes);
  const finalDiscounts = calculateDiscounts(
    rawSubtotal + finalTaxes,
    discounts
  );
  const finalTotal = rawSubtotal + finalTaxes - finalDiscounts;
  return {
    rawSubtotal,
    finalTaxes,
    finalDiscounts,
    finalTotal,
  };
};

const calculateTaxes = (subTotal: number, items: MenuItem[], taxes: Tax[]) => {
  let totalTaxes = 0;
  taxes.forEach((t) => {
    if (!t.category) {
      totalTaxes += subTotal * t.price;
    }
    totalTaxes += items
      .filter((i) => i.category === t.category)
      .reduce((prev, cur) => prev + cur.price * t.price, 0);
  });
  return totalTaxes;
};

const calculateDiscounts = (subTotal: number, discounts: Discount[]) => {
  let finalSubtotal = subTotal;
  const flatDiscounts: Discount[] = [];
  const percentDiscounts: Discount[] = [];
  discounts.forEach((d) => {
    if (d.type === 'flat') {
      flatDiscounts.push(d);
    }
    if (d.type === 'percent') {
      percentDiscounts.push(d);
    }
  });
  finalSubtotal += flatDiscounts.reduce((prev, curr) => prev + curr.price, 0);
  finalSubtotal +=
    percentDiscounts.reduce((prev, curr) => prev + curr.price, 0) *
    finalSubtotal;

  return subTotal - finalSubtotal;
};
