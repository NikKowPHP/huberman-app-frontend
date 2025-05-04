import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackParamList } from './AppStack.d'; // We'll create this next

// Import placeholder screens (we'll create these too)
import ProtocolListScreen from '../screens/Protocols/ProtocolListScreen';
import NotesScreen from '../screens/Notes/NotesScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Tab = createBottomTabNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Protocols" component={ProtocolListScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
