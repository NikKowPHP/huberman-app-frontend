import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import CustomTextInput from '../components/TextInput';
import Button from '../components/Button/Button';
import useAuthStore from '@/store/authStore';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationProp } from '../navigation/AuthStack';

const SignupScreen = () => {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const register = useAuthStore((state) => state.register);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    try {
      await register(email, password, name);
      // Navigation to Main App stack will be handled by RootNavigator based on isAuthenticated state
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <CustomTextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button
          title="Sign Up"
          onPress={handleSignup}
          disabled={!name || !email || !password}
          accessibilityLabel="Sign Up"
          accessibilityHint="Create a new account"
          accessibilityRole="button"
        />
      )}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
        accessibilityLabel="Login"
        accessibilityHint="Navigate to the login screen"
        accessibilityRole="button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default SignupScreen;
