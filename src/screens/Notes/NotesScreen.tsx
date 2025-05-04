import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Notes Screen (Placeholder)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotesScreen;
