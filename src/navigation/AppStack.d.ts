// Type definitions for the App Stack (Bottom Tab Navigator)
import { Reminder } from '../services/api/reminders';

export type AppStackParamList = {
  Protocols: { screen?: keyof ProtocolStackParamList };
  Notes: undefined;
  Settings: undefined;
};

export type ProtocolStackParamList = {
  ProtocolList: undefined;
  ProtocolDetail: { protocolId: string };
  ReminderList: undefined;
  CreateEditReminder: { reminder?: Reminder };
};

export type NoteStackParamList = {
  NoteList: undefined;
  NoteDetail: { id: string };
};

export type SettingsStackParamList = {
  Settings: undefined;
};
