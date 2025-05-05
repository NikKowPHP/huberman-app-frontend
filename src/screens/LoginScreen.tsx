import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import CustomTextInput from '../components/TextInput';
import useAuthStore from '../store/authStore';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationProp } from '../navigation/AuthStack';
import { useTheme } from '../theme/ThemeProvider';
import Button from '../components/Button/Button';

const LoginScreen = () => {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const login = useAuthStore((state) => state.login);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: theme.spacing.s4,
    },
    title: {
      fontSize: theme.typography.heading1.fontSize,
      fontWeight: theme.typography.weights.bold,
      marginBottom: theme.spacing.s4,
      textAlign: 'center',
      color: theme.colors.neutralForeground1,
    },
    input: {
      height: '8%',
      borderColor: theme.colors.neutralForeground3,
      borderWidth: 1,
      marginBottom: theme.spacing.s3,
      paddingHorizontal: theme.spacing.s2,
      color: theme.colors.neutralForeground1,
    },
    errorText: {
      color: theme.colors.statusDangerBackground1,
      marginTop: theme.spacing.s3,
      textAlign: 'center',
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.weights.semibold,
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      // Navigation to Main App stack will be handled by RootNavigator based on isAuthenticated state
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header" accessibilityLabel="Login">Login</Text>
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
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.primary} accessibilityLabel="Loading" />
      ) : (
        <Button title="Login" onPress={handleLogin} disabled={!email || !password} accessibilityLabel="Login" accessibilityHint="Press to login"/>
      )}
      {error ? <Text style={styles.errorText} accessibilityLiveRegion="polite">{error}</Text> : null}

      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} variant="secondary" accessibilityLabel="Forgot Password" accessibilityHint="Navigate to forgot password screen"/>
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Signup')} variant="secondary" accessibilityLabel="Sign Up" accessibilityHint="Navigate to sign up screen"/>
    </View>
  );
};

export default LoginScreen;
