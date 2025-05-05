import axios from 'axios';

import { API_URL } from '../../config';
import { checkNetworkStatus, handleApiError } from './auth';

export type Protocol = {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  duration: string;
  category: string;
};

export type ProtocolDetail = Protocol & {
  steps: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    isPremium: boolean;
  }>;
  references: string[];
};

export const fetchProtocols = async (): Promise<Protocol[]> => {
  try {
    checkNetworkStatus();
    const response = await axios.get(`${API_URL}/protocols`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const fetchProtocolDetails = async (id: string, isPremium: boolean = false): Promise<ProtocolDetail> => {
  try {
    checkNetworkStatus();
    const response = await axios.get(`${API_URL}/protocols/${id}`, {
      params: {
        isPremium: isPremium,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
