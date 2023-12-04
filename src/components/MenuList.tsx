import { Menu, MenuItem } from '@data/items';
import React, { useCallback } from 'react';
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
} from 'react-native';
import { MenuListItem } from './MenuListItem';
import { SectionTitle } from './SectionTitle';
import { Separator } from './Separator';

export type MenuListProps = {
  onItemPress: (item: MenuItem) => void;
  data: SectionListData<MenuItem, Menu>[];
};

export const MenuList = ({ onItemPress, data }: MenuListProps) => {
  const renderItem: SectionListRenderItem<MenuItem, Menu> = useCallback(
    ({ item }) => {
      const onPress = () => {
        onItemPress(item)
      };
      return <MenuListItem item={item} onPress={onPress} />;
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
    <SectionList
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item, index) => item.name + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={data}
      removeClippedSubviews
    />
  );
};
