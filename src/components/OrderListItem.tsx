import { MenuItem } from '@data/items';
import { formatCurrencyText } from '@utils/text';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { CoreText } from './CoreText';

export type OrderListItemProps = {
  item: MenuItem;
  onPress: () => void;
};

export const OrderListItem = ({ item, onPress }: OrderListItemProps) => {
  const renderRightActions = () => {
    return (
      <View
        style={{
          margin: 0,
          alignContent: 'center',
          justifyContent: 'center',
          width: 70,
        }}
      >
        <Button color="red" onPress={onPress} title="DELETE"></Button>
      </View>
    );
  };

  return (
    <Swipeable containerStyle={styles.container} renderRightActions={renderRightActions} >
      <CoreText>{item.name}</CoreText>
      <CoreText>{formatCurrencyText(item.price)}</CoreText>
    </Swipeable>
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
