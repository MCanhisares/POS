import { Discount, MenuItem, Tax } from '@data/items';

export const calculateOrderSummary = (
  items: MenuItem[],
  discounts: Discount[],
  taxes: Tax[]
) => {
  const rawSubtotal = items.reduce((prev, cur) => prev + cur.price, 0);
  const finalTaxes = calculateTaxes(items, taxes);
  const finalDiscounts = calculateDiscounts(
    rawSubtotal + finalTaxes,
    discounts
  );
  const finalTotal = rawSubtotal + finalTaxes - finalDiscounts;
  return {
    rawSubtotal,
    finalTaxes,
    finalDiscounts,
    finalTotal: finalTotal > 0 ? finalTotal : 0,
  };
};

export const calculateTaxes = (
  items: MenuItem[],
  taxes: Tax[]
) => {
  const rawSubtotal = items.reduce((prev, cur) => prev + cur.price, 0);
  let totalTaxes = 0;
  taxes.forEach((t) => {
    if (!t.category) {
      totalTaxes += rawSubtotal * t.price;
    }
    totalTaxes += items
      .filter((i) => i.category === t.category)
      .reduce((prev, cur) => prev + cur.price * t.price, 0);
  });
  return totalTaxes;
};

export const calculateDiscounts = (subTotal: number, discounts: Discount[]) => {
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
  if (finalSubtotal < 0) {
    return subTotal - finalSubtotal;
  }
  finalSubtotal +=
    percentDiscounts.reduce((prev, curr) => prev + curr.price, 0) *
    finalSubtotal;

  return subTotal - finalSubtotal;
};
