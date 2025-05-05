import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('home-screen')).toBeDefined();
  });
});
