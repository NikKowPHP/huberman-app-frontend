/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import firebase from '@react-native-firebase/app';

firebase.initializeApp();
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
