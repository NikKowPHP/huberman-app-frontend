import axios from 'axios';
import { API_URL } from '../../config';
import { checkNetworkStatus, handleApiError } from './auth';

export const sendDeviceToken = async (token: string) => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/user/device-token`, {
      token,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending device token:', handleApiError(error));
    throw new Error(handleApiError(error));
  }
};
