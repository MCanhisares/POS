import { DefaultTheme } from '@theme/default';
import React, { memo } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type CoreTextProps = {
  variant?: TextVariant;
} & TextProps;

export const CoreText = memo(
  ({ variant = 'paragraph', style, ...props }: CoreTextProps) => {
    const appliedStyles = variantStyles[variant];
    return (
      <Text
        textBreakStrategy="simple"
        style={[appliedStyles, styles.default, style]}
        {...props}
      />
    );
  }
);

const variantStyles = StyleSheet.create({
  header: {
    fontSize: 20,
    lineHeight: 28,
  } as TextStyle,
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
  } as TextStyle,
});

const styles = StyleSheet.create({
  default: {
    color: DefaultTheme.colors.black,
  },
});

export type TextVariant = keyof typeof variantStyles;
