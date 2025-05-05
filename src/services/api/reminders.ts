import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000/api';

export interface Reminder {
  id: string;
  protocolId: string;
  time: string;
  userId: string;
}

export const fetchReminders = async (userId: string): Promise<Reminder[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reminders?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReminder = async (reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reminders`, reminder);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReminder = async (id: string, reminder: Omit<Reminder, 'id'>): Promise<Reminder> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/reminders/${id}`, reminder);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReminder = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/reminders/${id}`);
  } catch (error) {
    throw error;
  }
};
