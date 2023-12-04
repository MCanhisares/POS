import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import { DefaultTheme } from '@theme/default';

export type CoreScreenProps = {
  statusBarBackgroundColor?: string;
} & PropsWithChildren;

export const BaseScreen: FC<CoreScreenProps & StatusBarProps> = ({
  children,
  barStyle = 'dark-content',
  statusBarBackgroundColor = DefaultTheme.colors.white,
  backgroundColor = DefaultTheme.colors.white,
}) => {
  return (
    <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor }]}>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={statusBarBackgroundColor}
      />
      <View style={[styles.container]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
