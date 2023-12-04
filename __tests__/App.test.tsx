import { RootStack } from '@navigation/RootStack';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('App startup', () => {
  test('Renders screen correctly', async () => {
    const component = (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );

    render(component);

    expect(component).toBeDefined();
  });
});
