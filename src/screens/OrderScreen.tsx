import { RootScreens } from '@navigation/RootScreens';
import { RootStackScreenProp } from '@navigation/RootStack';
import React from 'react';
import { Button } from 'react-native';
import { BaseScreen } from './BaseScreen';

export const OrderScreen: RootStackScreenProp<RootScreens.Order> = ({
  navigation,
}) => {
  return (
    <BaseScreen>
      <Button
        title="Click me"
        onPress={() => navigation.navigate(RootScreens.Discounts)}
      />
    </BaseScreen>
  );
};
