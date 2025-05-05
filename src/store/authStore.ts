import { create } from 'zustand';
import * as Keychain from 'react-native-keychain';

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
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      await Keychain.setGenericPassword('authToken', data.accessToken);

      set({
        accessToken: data.accessToken,
        user: data.user,
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (email, password, name) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name })
      });
      const data = await response.json();

      await Keychain.setGenericPassword('authToken', data.accessToken);

      set({
        accessToken: data.accessToken,
        user: data.user,
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
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

export default useAuthStore;
