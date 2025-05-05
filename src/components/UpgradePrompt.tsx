import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button/Button';
import { useTheme } from '../theme/ThemeProvider';

const UpgradePrompt = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.neutralBackground3,
      borderRadius: 5,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upgrade to Premium for more features!</Text>
      <Button
        title="Upgrade Now"
        onPress={() => {}}
        accessibilityLabel="Upgrade Now"
        accessibilityHint="Upgrade to the premium version of the app"
        accessibilityRole="button"
      />
    </View>
  );
};

export default UpgradePrompt;
