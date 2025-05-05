import axios from 'axios';
import { API_BASE_URL } from '../../config';

export const sendDeviceToken = async (token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/device-token`, {
      token,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending device token:', error);
    throw error;
  }
};
