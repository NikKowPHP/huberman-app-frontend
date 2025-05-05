import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<Button title="Test" onPress={() => {}} />);
    expect(getByTestId('button')).toBeDefined();
  });
});
