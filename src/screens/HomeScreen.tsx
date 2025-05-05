import React from 'react';
import { View, Text } from 'react-native';
import useAuthStore from '../store/authStore';
import Button from '../components/Button/Button';

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button
        title="Logout"
        onPress={logout}
        accessibilityLabel="Logout"
        accessibilityHint="Logout of the app"
        accessibilityRole="button"
      />
    </View>
  );
};

export default HomeScreen;
