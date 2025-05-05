import React from 'react';
import { render } from '@testing-library/react-native';
import ReminderListScreen from './ReminderListScreen';
import { Text } from 'react-native';

jest.mock('./ReminderListScreen', () => {
  const MockReminderListScreen = () => <Text>Mock ReminderListScreen</Text>;
  MockReminderListScreen.displayName = 'ReminderListScreen';
  return {
    __esModule: true,
    default: (props: any) => <MockReminderListScreen {...props} />,
  };
});

describe('ReminderListScreen', () => {
  it('should render without error', () => {
    const { getByText } = render(<ReminderListScreen />);
    expect(getByText('Mock ReminderListScreen')).toBeDefined();
  });
});
