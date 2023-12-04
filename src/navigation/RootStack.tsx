import { RootScreens } from '@navigation/RootScreens';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { DiscountScreen } from '@screens/DiscountScreen';
import { OrderScreen } from '@screens/OrderScreen';
import React from 'react';
import { OrderContext } from '../contexts/OrderContext';

type RootStackParamList = {
  [RootScreens.Discounts]: undefined;
  [RootScreens.Order]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProp<Screen extends keyof RootStackParamList> =
  React.FC<NativeStackScreenProps<RootStackParamList, Screen>>;

export const RootStack = () => {
  return (
    <OrderContext.Provider>
      <Stack.Navigator initialRouteName={RootScreens.Order}>
        <Stack.Screen name={RootScreens.Order} component={OrderScreen} />
        <Stack.Screen name={RootScreens.Discounts} component={DiscountScreen} />
      </Stack.Navigator>
    </OrderContext.Provider>
  );
};
