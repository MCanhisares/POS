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
  title?: string;
  noBackButton?: boolean;
  invertedHeaderDecoration?: boolean;
  backgroundColor?: string;
  fullscreen?: boolean;
  header?: ReactNode;
  noBottomInset?: boolean;
  statusBarBackgroundColor?: string;
  bottomPadding?: boolean;
} & PropsWithChildren;

export const BaseScreen: FC<CoreScreenProps & StatusBarProps> = ({
  children,
  header = null,
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
      {header}
      <View style={[styles.container]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
