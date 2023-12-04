import { Discount } from '@data/items';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CoreText } from './CoreText';

export type DiscountListItemProps = {
  item: Discount;
  onPress: () => void;
  selected: boolean;
};

export const DiscountListItem = ({
  item,
  onPress,
  selected = false,
}: DiscountListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CoreText>{item.name}</CoreText>
      {selected && <FontAwesomeIcon icon={faCheck} />}
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
