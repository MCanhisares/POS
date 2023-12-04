import { MenuList } from '@components/MenuList';
import { OrderList } from '@components/OrderList';
import { OrderSummary } from '@components/OrderSummary';
import { OrderTabs } from '@components/OrderTabs';
import { MenuItem, items } from '@data/items';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useToggle } from '@hooks/useToggle';
import { RootScreens } from '@navigation/RootScreens';
import { RootStackScreenProp } from '@navigation/RootStack';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { OrderContext } from '../contexts/OrderContext';
import { BaseScreen } from './BaseScreen';

export const OrderScreen: RootStackScreenProp<RootScreens.Order> = ({
  navigation,
}) => {
  const [goToMenu, goToOrder, isMenuOpen] = useToggle(true);
  const menu = useMemo(() => items.menu, []);
  const { addItem, orderSummary, currentOrder, removeItem } =
    OrderContext.useContainer();

  useEffect(() => {
    navigation.setOptions({
      title: 'Order',
      headerRight: rightNavButton,
    });
  }, []);

  const onListItemPress = useCallback((item: MenuItem) => {
    addItem(item);
  }, []);

  const rightNavButton = useCallback(() => {
    const onPress = () => {
      navigation.navigate(RootScreens.Discounts);
    };
    return (
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={faAdd} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <BaseScreen>
      <OrderTabs
        leftButton={{
          title: 'Menu',
          onPress: goToOrder,
          selected: isMenuOpen,
        }}
        rightButton={{
          title: 'Order',
          onPress: goToMenu,
          selected: !isMenuOpen,
        }}
      />
      {isMenuOpen ? (
        <MenuList data={menu} onItemPress={onListItemPress} />
      ) : (
        <OrderList data={currentOrder} onSwipeItem={removeItem} />
      )}

      
      <OrderSummary summary={orderSummary} />
    </BaseScreen>
  );
};


