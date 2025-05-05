import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

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
    const response = await axios.get(`${API_BASE_URL}/protocols`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProtocolDetails = async (id: string, isPremium: boolean = false): Promise<ProtocolDetail> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/protocols/${id}`, {
      params: {
        isPremium: isPremium,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
