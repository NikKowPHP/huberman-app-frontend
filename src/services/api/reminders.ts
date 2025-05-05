import axios from 'axios';

import { API_URL } from '../../config';
import { checkNetworkStatus, handleApiError } from './auth';

export interface Reminder {
  id: string;
  protocolId: string;
  time: string;
  userId: string;
}

export const fetchReminders = async (userId: string): Promise<Reminder[]> => {
  try {
    checkNetworkStatus();
    const response = await axios.get(`${API_URL}/reminders?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const createReminder = async (reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
  try {
    checkNetworkStatus();
    const response = await axios.post(`${API_URL}/reminders`, reminder);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const updateReminder = async (id: string, reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
  try {
    checkNetworkStatus();
    const response = await axios.put(`${API_URL}/reminders/${id}`, reminder);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

export const deleteReminder = async (id: string): Promise<void> => {
  try {
    checkNetworkStatus();
    await axios.delete(`${API_URL}/reminders/${id}`);
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};
