import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';
import Button from '../components/Button/Button';
import useAuthStore from '../store/authStore';
import { useTheme } from '../theme/ThemeProvider';

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const register = useAuthStore((state) => state.register);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      await register(email, password, name);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: theme.colors.neutralBackground1,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: theme.colors.neutralForeground1,
    },
    input: {
      height: 50,
      borderColor: theme.colors.neutralForeground3,
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 15,
      borderRadius: 5,
      fontSize: 16,
      color: theme.colors.neutralForeground1,
    },
    errorText: {
      color: theme.colors.statusDangerBackground1,
      marginTop: 12,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <CustomTextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        accessibilityLabel="Name"
        accessibilityHint="Enter your name"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        accessibilityLabel="Email address"
        accessibilityHint="Enter your email address"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Password"
        accessibilityHint="Enter your password"
        autoCapitalize="none"
      />
      <Button 
        title={loading ? 'Loading...' : 'Register'}
        onPress={handleRegister}
        disabled={loading}
        accessibilityLabel='Register'
        accessibilityHint='Create a new account'
        accessibilityRole='button'
      />
    </View>
  );
};

export default RegisterScreen;
