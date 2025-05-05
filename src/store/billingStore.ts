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
  initSubscriptionRefresh: (userId: string) => {
    setInterval(async () => {
      try {
        const subscription = await fetchSubscriptionStatus(userId);
        set({ subscription });
      } catch (error) {
        console.error('Failed to refresh subscription:', error);
      }
    }, 30000); // Refresh every 30 seconds
  },
}));

export default useBillingStore;
