import { DefaultTheme } from '@theme/default';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

export const Separator = memo(() => <View style={styles.separator} />);

const styles = StyleSheet.create({
  separator: {
    height: 2,
    backgroundColor: DefaultTheme.colors.darkGray,
  },
});
