import React from 'react';
import { render } from '@testing-library/react-native';
import SettingsScreen from './SettingsScreen';

describe('SettingsScreen', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<SettingsScreen />);
    expect(getByTestId('settings-screen')).toBeDefined();
  });
});
