import React from 'react';
import { render } from '@testing-library/react-native';
import PremiumScreen from './PremiumScreen';

describe('PremiumScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<PremiumScreen />);
    expect(getByTestId('premium-screen')).toBeDefined();
  });
});
