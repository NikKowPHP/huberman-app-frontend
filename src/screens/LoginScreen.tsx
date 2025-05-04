import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../store/authStore';

const LoginScreen = () => {
  const { login } = useAuthStore();

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;
