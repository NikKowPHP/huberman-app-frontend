import { create } from 'zustand';
import { fetchSubscriptionStatus } from '../services/api/billing';
import { SubscriptionStatus } from '../types/billing';

interface BillingState {
  subscription: SubscriptionStatus | null;
  isLoading: boolean;
  error: string | null;
  fetchSubscription: (userId: string) => Promise<void>;
  refreshSubscription: (userId: string) => Promise<void>;
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
    } catch (error) {
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
  }
}));

export default useBillingStore;
