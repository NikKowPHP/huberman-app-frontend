import React from 'react';
import { render } from '@testing-library/react-native';
import SignupScreen from './SignupScreen';

describe('SignupScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<SignupScreen />);
    expect(getByTestId('signup-screen')).toBeDefined();
  });
});
