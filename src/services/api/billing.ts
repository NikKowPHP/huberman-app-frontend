import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { Plan, SubscriptionStatus } from '../../types/billing';

export const fetchPlans = async (): Promise<Plan[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/plans`);
    return response.data;
  } catch (error) {
    console.error('Error fetching plans:', error);
    throw error;
  }
};

export const fetchSubscriptionStatus = async (userId: string): Promise<SubscriptionStatus> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/subscription`, {
      params: { userId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription status:', error);
    throw error;
  }
};
