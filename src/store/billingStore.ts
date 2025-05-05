import { create } from 'zustand';
import { fetchSubscriptionStatus } from '../services/api/billing';
import { SubscriptionStatus } from '../types/billing';

interface BillingState {
  subscription: SubscriptionStatus | null;
  isLoading: boolean;
  error: string | null;
  fetchSubscription: (userId: string) => Promise<void>;
  refreshSubscription: (userId: string) => Promise<void>;
  initSubscriptionRefresh: (userId: string) => void;
}

const useBillingStore = create<BillingState>((set) => ({
  subscription: null,
  isLoading: false,
  error: null,

  fetchSubscription: async (userId) => {
    try {
      set({ isLoading: true, error: null });
      const subscription = await fetchSubscriptionStatus(userId);
      set({ subscription, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  refreshSubscription: async (userId) => {
    try {
      const subscription = await fetchSubscriptionStatus(userId);
      set({ subscription });
    } catch (error) {
      console.error('Failed to refresh subscription:', error);
    }
  },
  initSubscriptionRefresh: () => {
    // Add event listener for app focus
    // For React Native, you might use AppState.addEventListener('focus', () => refreshSubscription());
    // For web, you might use window.addEventListener('focus', () => refreshSubscription());
    // This is just a placeholder, the actual implementation will depend on the platform

    // Example placeholder for React Native:
    // import { AppState } from 'react-native';
    // AppState.addEventListener('focus', () => refreshSubscription());

    // Example placeholder for web:
    // window.addEventListener('focus', () => refreshSubscription());
  },
}));

export default useBillingStore;
