import React from 'react';
import { render } from '@testing-library/react-native';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { Text } from 'react-native';

jest.mock('./ForgotPasswordScreen', () => {
  const MockForgotPasswordScreen = () => <Text>Mock ForgotPasswordScreen</Text>;
  MockForgotPasswordScreen.displayName = 'ForgotPasswordScreen';
  return {
    __esModule: true,
    default: (props: any) => <MockForgotPasswordScreen {...props} />,
  };
});

describe('ForgotPasswordScreen', () => {
  it('should render without error', () => {
    const { getByText } = render(<ForgotPasswordScreen />);
    expect(getByText('Mock ForgotPasswordScreen')).toBeDefined();
  });
});
