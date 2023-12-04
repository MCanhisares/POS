import { formatCurrencyText } from '@utils/text';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <CoreText>
        Subtotal: {`${formatCurrencyText(summary.rawSubtotal)}`}
      </CoreText>
      <Separator />
      <CoreText>Taxes: {`${formatCurrencyText(summary.finalTaxes)}`}</CoreText>
      <Separator />
      <CoreText>
        Discounts: {`${formatCurrencyText(summary.finalDiscounts)}`}
      </CoreText>
      <Separator />
      <CoreText>Total: {`${formatCurrencyText(summary.finalTotal)}`}</CoreText>
      <Separator />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});
