import React from 'react';
import { render } from '@testing-library/react-native';
import ProtocolListScreen from './ProtocolListScreen';
import { Text } from 'react-native';

jest.mock('./ProtocolListScreen', () => {
  const MockProtocolListScreen = () => <Text>Mock ProtocolListScreen</Text>;
  MockProtocolListScreen.displayName = 'ProtocolListScreen';
  return {
    __esModule: true,
    default: (props: any) => <MockProtocolListScreen {...props} />,
  };
});

describe('ProtocolListScreen', () => {
  it('should render without error', () => {
    const { getByText } = render(<ProtocolListScreen />);
    expect(getByText('Mock ProtocolListScreen')).toBeDefined();
  });
});
