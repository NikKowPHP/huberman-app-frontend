// Type definitions for the App Stack (Bottom Tab Navigator)

export type AppStackParamList = {
  Protocols: undefined;
  Notes: undefined;
  Settings: undefined;
};

export type ProtocolStackParamList = {
  ProtocolList: undefined;
  ProtocolDetail: { id: string };
};

export type NoteStackParamList = {
  NoteList: undefined;
  NoteDetail: { id: string };
};

export type SettingsStackParamList = {
  Settings: undefined;
};
