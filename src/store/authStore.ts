import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';
import { sendDeviceToken } from '../services/api/user';
import messaging from '@react-native-firebase/messaging';
import { login as loginApi, register as registerApi, logout as logoutApi } from '../services/api/auth';
import useBillingStore from './billingStore';

interface User {
  id: string;
  name: string;
  email: string;
  isPremium: boolean;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loadToken: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,

  login: async (email, password) => {
    try {
      const data = await loginApi({ email, password });

      await Keychain.setGenericPassword('authToken', data.accessToken);

      set({
        accessToken: data.accessToken,
        user: {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          isPremium: data.user.isPremium,
        },
        isAuthenticated: true,
      });

      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        sendDeviceToken(fcmToken);
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (email, password, name) => {
    try {
      const data = await registerApi({ email, password, name });

      await Keychain.setGenericPassword('authToken', data.accessToken);

      set({
        accessToken: data.accessToken,
        user: {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          isPremium: data.user.isPremium,
        },
        isAuthenticated: true,
      });

      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        sendDeviceToken(fcmToken);
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await logoutApi();
      await Keychain.resetGenericPassword();
      set({
        accessToken: null,
        user: null,
        isAuthenticated: false
      });
    } catch (error) {
      console.error('Logout error:',  error);
      throw error;
    }
  },

  loadToken: async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        set({
          accessToken: credentials.password,
          isAuthenticated: true
        });
      }
    } catch (error) {
      console.error('Load token error:', error);
      throw error;
    }
  }
}));

useAuthStore.subscribe((state) => {
  const { user } = state;
  if (user) {
    const billingStore = useBillingStore.getState();
    const { subscription } = billingStore;
    if (subscription) {
      useAuthStore.setState({
        user: {
          ...user,
          isPremium: subscription.status === 'active',
        },
      });
    }
  }
});

export default useAuthStore;
