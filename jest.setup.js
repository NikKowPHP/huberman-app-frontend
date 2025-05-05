/* eslint-env jest */
// jest.setup.js

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-keychain', () => ({
  setGenericPassword: jest.fn().mockResolvedValue(null),
  getGenericPassword: jest.fn().mockResolvedValue({ username: 'username', password: 'password' }),
  resetGenericPassword: jest.fn().mockResolvedValue(null),
}));
jest.mock('@react-native-firebase/messaging', () => ({
  getToken: jest.fn().mockResolvedValue('test-token'),
  requestPermission: jest.fn().mockResolvedValue(true),
  hasPermission: jest.fn().mockResolvedValue(true),
}));
jest.mock('react-native-iap', () => ({
  initConnection: jest.fn().mockResolvedValue(true),
  getSubscriptions: jest.fn().mockResolvedValue([]),
  getProducts: jest.fn().mockResolvedValue([]),
  requestSubscription: jest.fn().mockResolvedValue(true),
  finishTransaction: jest.fn().mockResolvedValue(true),
  flushFailedPurchasesCachedAsPendingAndroid: jest.fn().mockResolvedValue(true),
  clearTransaction: jest.fn().mockResolvedValue(true),
  clearProducts: jest.fn().mockResolvedValue(true),
  endConnection: jest.fn().mockResolvedValue(true),
}));
