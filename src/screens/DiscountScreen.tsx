import { DiscountListItem } from '@components/DiscountListItem';
import { Separator } from '@components/Separator';
import { RootScreens } from '@navigation/RootScreens';
import { RootStackScreenProp } from '@navigation/RootStack';
import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { DiscountSelection, OrderContext } from '../contexts/OrderContext';
import { BaseScreen } from './BaseScreen';

export const DiscountScreen: RootStackScreenProp<RootScreens.Discounts> = ({
  navigation,
}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Discounts',
    });
  }, []);

  const { toggleDiscount, currentDiscounts } = OrderContext.useContainer();

  const renderItem: ListRenderItem<DiscountSelection> = useCallback(
    ({ item }) => {
      const onPress = () => {
        toggleDiscount(item);
      };
      return (
        <DiscountListItem
          item={item}
          onPress={onPress}
          selected={item.selected}
        />
      );
    },
    [currentDiscounts]
  );

  const renderSeparator = useCallback(() => <Separator />, []);

  return (
    <BaseScreen>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        data={currentDiscounts}
        removeClippedSubviews
      />
    </BaseScreen>
  );
};
