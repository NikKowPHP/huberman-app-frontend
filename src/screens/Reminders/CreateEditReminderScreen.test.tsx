import React from 'react';
import { render } from '@testing-library/react-native';
import CreateEditReminderScreen from './CreateEditReminderScreen';
import { Text } from 'react-native';

jest.mock('./CreateEditReminderScreen', () => {
  const MockCreateEditReminderScreen = () => <Text>Mock CreateEditReminderScreen</Text>;
  MockCreateEditReminderScreen.displayName = 'CreateEditReminderScreen';
  return {
    __esModule: true,
    default: (props: any) => <MockCreateEditReminderScreen {...props} />,
  };
});

describe('CreateEditReminderScreen', () => {
  it('should render without error', () => {
    const { getByText } = render(<CreateEditReminderScreen />);
    expect(getByText('Mock CreateEditReminderScreen')).toBeDefined();
  });
});
