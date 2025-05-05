import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const UpgradePrompt = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upgrade to Premium for more features!</Text>
      <Button title="Upgrade Now" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default UpgradePrompt;
