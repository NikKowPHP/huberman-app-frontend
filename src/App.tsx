import React, { useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { sendDeviceToken } from './services/api/user';

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      requestUserPermission();
    }

    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log('FCM Token:', fcmToken);
          sendDeviceToken(fcmToken);
        } else {
          console.log('User does not have a device token yet');
        }
      });

    messaging().onMessage(async remoteMessage => {
      console.log('Received foreground message:', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background:', remoteMessage);
    });
  }, []);

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
};

export default App;
