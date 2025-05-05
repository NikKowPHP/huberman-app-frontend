import axios from 'axios';
import { API_URL } from '../../config';
import { Plan, SubscriptionStatus } from '../../types/billing';
import { checkNetworkStatus, handleApiError } from './auth';

export const fetchPlans = async (): Promise<Plan[]> => {
  try {
    checkNetworkStatus();
    const response = await axios.get(`${API_URL}/plans`);
    return response.data;
  } catch (error) {
    console.error('Error fetching plans:', handleApiError(error));
    throw new Error(handleApiError(error));
  }
};

export const fetchSubscriptionStatus = async (userId: string): Promise<SubscriptionStatus> => {
  try {
    checkNetworkStatus();
    const response = await axios.get(`${API_URL}/user/subscription`, {
      params: { userId }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching subscription status:', handleApiError(error));
    throw new Error(handleApiError(error));
  }
};
