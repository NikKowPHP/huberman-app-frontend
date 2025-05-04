import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../store/authStore';

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <View>
      <Text>Welcome to the App!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
