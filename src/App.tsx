import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Huberman App Frontend</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
