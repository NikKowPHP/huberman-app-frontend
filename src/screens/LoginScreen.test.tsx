import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<LoginScreen />);
    expect(getByTestId('login-screen')).toBeDefined();
  });
});
