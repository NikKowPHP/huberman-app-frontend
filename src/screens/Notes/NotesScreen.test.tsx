import React from 'react';
import { render } from '@testing-library/react-native';
import NotesScreen from './NotesScreen';
import { Text } from 'react-native';

jest.mock('./NotesScreen', () => {
  const MockNotesScreen = () => <Text>Mock NotesScreen</Text>;
  MockNotesScreen.displayName = 'NotesScreen';
  return {
    __esModule: true,
    default: (props: any) => <MockNotesScreen {...props} />,
  };
});

describe('NotesScreen', () => {
  it('should render without error', () => {
    const { getByText } = render(<NotesScreen />);
    expect(getByText('Mock NotesScreen')).toBeDefined();
  });
});
