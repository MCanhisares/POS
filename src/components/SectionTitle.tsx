import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CoreText } from './CoreText';
import { DefaultTheme } from '@theme/default';

export type SectionTitleProps = {
  name: string;
};

export const SectionTitle = ({ name }: SectionTitleProps) => {
  return (
    <View style={styles.container}>
      <CoreText variant="header">{name}</CoreText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.lightGray
  }
})
