import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useBillingStore from '../..//store/billingStore';
import useAuthStore from '../../store/authStore'; // Assuming authStore has userId

const SettingsScreen: React.FC = () => {
  const { subscription, isLoading, fetchSubscription, initSubscriptionRefresh } = useBillingStore();
  const { user } = useAuthStore(); // Get user from auth store
  const navigation = useNavigation();

  useEffect(() => {
    if (user?.id && !subscription && !isLoading) {
      fetchSubscription(user.id);
      initSubscriptionRefresh(user.id);
    }
  }, [user, subscription, isLoading, fetchSubscription, initSubscriptionRefresh]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {isLoading && <ActivityIndicator size="small" />}
      {subscription ? (
        <View>
          <Text>Subscription Status: {subscription.status}</Text>
          {subscription.planId && <Text>Plan: {subscription.planId}</Text>}
          {subscription.currentPeriodEnd && <Text>Ends: {new Date(subscription.currentPeriodEnd).toLocaleDateString()}</Text>}
        </View>
      ) : (
        <Text>No active subscription.</Text>
      )}
      <Button
        title="Reminders"
        onPress={() => navigation.navigate('ReminderList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
