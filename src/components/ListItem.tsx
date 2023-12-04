import { MenuItem } from '@data/items';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CoreText } from './CoreText';

export type ListItemProps = {
  item: MenuItem;
  onPress: () => void;
};

export const ListItem = ({ item, onPress }: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CoreText>{item.name}</CoreText>
      <CoreText>{item.price}</CoreText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
