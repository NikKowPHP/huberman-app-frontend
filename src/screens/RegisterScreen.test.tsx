import React from 'react';
import { render } from '@testing-library/react-native';
import RegisterScreen from './RegisterScreen';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('RegisterScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<RegisterScreen navigation={mockNavigation} />);
    expect(getByTestId('register-screen')).toBeDefined();
  });
});
