import { DefaultTheme } from '@theme/default';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CoreText } from './CoreText';

type OrderTabsProps = {
  leftButton: TabButtonProps;
  rightButton: TabButtonProps;
};
export const OrderTabs = ({ leftButton, rightButton }: OrderTabsProps) => {
  return (
    <View style={style.container}>
      <TabButton {...leftButton} />
      <TabButton {...rightButton} />
    </View>
  );
};

type TabButtonProps = {
  title: string;
  onPress: () => void;
  selected: boolean;
};
const TabButton = ({ title, onPress, selected }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.button, selected && style.buttonSelected]}
      onPress={onPress}
    >
      <CoreText>{title}</CoreText>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 12,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 12,
    height: 48,
    width: '48%',
    marginHorizontal: 12,
    backgroundColor: DefaultTheme.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: DefaultTheme.colors.lightBlue,
  },
});
