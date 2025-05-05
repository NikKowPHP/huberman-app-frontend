import React from 'react';
import { render } from '@testing-library/react-native';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<TextInput />);
    expect(getByTestId('text-input')).toBeDefined();
  });
});
