import { Menu, MenuItem } from '@data/items';
import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItem,
} from 'react-native';

import { Separator } from './Separator';
import { OrderListItem } from './OrderListItem';
import { MenuItemId } from '@contexts/OrderContext';

export type OrderListProps = {
  onSwipeItem: (item: MenuItemId) => void;
  data: MenuItemId[];
};

export const OrderList = ({ onSwipeItem, data }: OrderListProps) => {
  const renderItem: ListRenderItem<MenuItemId> = useCallback(
    ({ item }) => {
      const onPress = () => {
        onSwipeItem(item)
      };
      return <OrderListItem item={item} onPress={onPress} />;
    },
    []
  );

  const renderSeparator = useCallback(() => <Separator />, []);

  return (
    <FlatList
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
      data={data}
      removeClippedSubviews
    />
  );
};
