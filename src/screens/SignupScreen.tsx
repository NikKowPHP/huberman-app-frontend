import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../store/authStore';

const SignupScreen = () => {
  const { login } = useAuthStore();

  return (
    <View>
      <Text>Signup Screen</Text>
      <Button title="Signup" onPress={login} />
    </View>
  );
};

export default SignupScreen;
