import { ListItem } from '@components/ListItem';
import { Discounts, items } from '@data/items';
import { RootScreens } from '@navigation/RootScreens';
import { RootStackScreenProp } from '@navigation/RootStack';
import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BaseScreen } from './BaseScreen';
import { Separator } from '@components/Separator';

export const DiscountScreen: RootStackScreenProp<RootScreens.Discounts> = () => {
  const data = useMemo(() => items.discounts, []);

  const renderItem: ListRenderItem<Discounts> = useCallback(({ item }) => {
    return <ListItem item={item} onPress={() => console.log({ item })} />;
  }, []);

  const renderSeparator = useCallback(() => <Separator />, []);

  return (
    <BaseScreen>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        data={data}
        removeClippedSubviews
      />
    </BaseScreen>
  );
};
