import { ListItem } from '@components/ListItem';
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
import { BaseScreen } from './BaseScreen';

export const OrderScreen: RootStackScreenProp<RootScreens.Order> = ({
  navigation,
}) => {
  const menu = useMemo(() => items.menu, []);
  const renderItem: SectionListRenderItem<MenuItem, Menu> = useCallback(
    ({ item }) => {
      return <ListItem item={item} onPress={() => console.log({ item })} />;
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
    </BaseScreen>
  );
};
