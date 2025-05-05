import React from 'react';
import { render } from '@testing-library/react-native';
import UpgradePrompt from './UpgradePrompt';

describe('UpgradePrompt', () => {
  it('should render without error', () => {
    const { getByTestId } = render(<UpgradePrompt />);
    expect(getByTestId('upgrade-prompt')).toBeDefined();
  });
});
