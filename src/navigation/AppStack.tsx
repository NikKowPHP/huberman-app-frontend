import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList, ProtocolStackParamList } from './AppStack.d';

// Import screens
import ProtocolListScreen from '../screens/Protocols/ProtocolListScreen';
import ProtocolDetailScreen from '../screens/Protocols/ProtocolDetailScreen';
import NotesScreen from '../screens/Notes/NotesScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import ReminderListScreen from '../screens/Reminders/ReminderListScreen';

const Tab = createBottomTabNavigator<AppStackParamList>();
const ProtocolStack = createNativeStackNavigator<ProtocolStackParamList>();

const ProtocolStackScreen = () => {
  return (
    <ProtocolStack.Navigator screenOptions={{ headerShown: false }}>
      <ProtocolStack.Screen name="ProtocolList" component={ProtocolListScreen} />
      <ProtocolStack.Screen name="ProtocolDetail" component={ProtocolDetailScreen} />
      <ProtocolStack.Screen name="ReminderList" component={ReminderListScreen} />
    </ProtocolStack.Navigator>
  );
};

const AppStack: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Protocols" component={ProtocolStackScreen}  />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
