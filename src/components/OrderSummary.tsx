import { formatCurrencyText } from '@utils/text';
import React, { memo } from 'react';
import { View } from 'react-native';
import { CoreText } from './CoreText';
import { Separator } from './Separator';

export type OrderSummaryType = {
  rawSubtotal: number;
  finalTaxes: number;
  finalDiscounts: number;
  finalTotal: number;
};

type OrderSummaryProps = {
  summary: OrderSummaryType;
};
export const OrderSummary = memo(({ summary }: OrderSummaryProps) => {
  return (
    <View>
      <CoreText>Subtotal: {`${formatCurrencyText(summary.rawSubtotal)}`}</CoreText>
      <Separator />
      <CoreText>Taxes: {`${formatCurrencyText(summary.finalTaxes)}`}</CoreText>
      <Separator />
      <CoreText>Discounts: {`${formatCurrencyText(summary.finalDiscounts)}`}</CoreText>
      <Separator />
      <CoreText>Total: {`${formatCurrencyText(summary.finalTotal)}`}</CoreText>
      <Separator />
    </View>
  );
});
