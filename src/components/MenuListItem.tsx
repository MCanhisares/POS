import { MenuItem } from '@data/items';
import { formatCurrencyText } from '@utils/text';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CoreText } from './CoreText';

export type MenuListItemProps = {
  item: MenuItem;
  onPress: () => void;
};

export const MenuListItem = ({ item, onPress }: MenuListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CoreText>{item.name}</CoreText>
      <CoreText>{formatCurrencyText(item.price)}</CoreText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
