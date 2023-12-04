import { render } from '@testing-library/react-native';
import React from 'react';
import App from '~/App';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ''
}))

describe('App startup', () => {
  test('Renders screen correctly', async () => {
    const component = <App />;

    render(component);

    expect(component).toBeDefined();
  });
});
