import axios from 'axios';

import { API_URL } from '../../config';

export const checkNetworkStatus = () => {
  console.log('Checking network status...');
  // Add actual network checking logic here
};

export const handleApiError = (error: any): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message || 'An unexpected error occurred.';
  } else {
    return String(error);
  }
};

export const register = async (userData: {
  email: string;
  password: string;
  name?: string;
}) => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const logout = async () => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const forgotPassword = async (email: string) => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
}

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword
    });
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
