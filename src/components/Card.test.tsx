import React from 'react';
import { render } from '@testing-library/react-native';
import Card from './Card';

describe('Card', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<Card>Test</Card>);
    expect(getByTestId('card')).toBeDefined();
  });
});
