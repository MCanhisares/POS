import { OrderListItem } from '@components/OrderListItem';
import { OrderSummary } from '@components/OrderSummary';
import { SectionTitle } from '@components/SectionTitle';
import { Separator } from '@components/Separator';
import { Menu, MenuItem, items } from '@data/items';
import { RootScreens } from '@navigation/RootScreens';
import { RootStackScreenProp } from '@navigation/RootStack';
import React, { useCallback, useMemo } from 'react';
import {
  Button,
  SectionList,
  SectionListData,
  SectionListRenderItem,
} from 'react-native';
import { OrderContext } from '../contexts/OrderContext';
import { BaseScreen } from './BaseScreen';

export const OrderScreen: RootStackScreenProp<RootScreens.Order> = ({
  navigation,
}) => {
  const { addItem, orderSummary } = OrderContext.useContainer();
  const menu = useMemo(() => items.menu, []);
  const renderItem: SectionListRenderItem<MenuItem, Menu> = useCallback(
    ({ item }) => {
      const onPress = () => {
        addItem(item);
      };
      return <OrderListItem item={item} onPress={onPress} />;
    },
    []
  );

  const renderSectionHeader = useCallback(
    (info: { section: SectionListData<MenuItem, Menu> }) => {
      return <SectionTitle name={info.section.title} />;
    },
    []
  );

  const renderSeparator = useCallback(() => <Separator />, []);

  return (
    <BaseScreen>
      <Button
        title="Add discount"
        onPress={() => navigation.navigate(RootScreens.Discounts)}
      />
      <SectionList
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={menu}
        removeClippedSubviews
      />
      <OrderSummary summary={orderSummary} />
    </BaseScreen>
  );
};
