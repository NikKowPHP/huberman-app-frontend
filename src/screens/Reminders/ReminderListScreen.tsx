import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import useAuthStore from '../../store/authStore';
import { fetchReminders, Reminder } from '../../services/api/reminders';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';

type ReminderListNavigationProp = NativeStackNavigationProp<ProtocolStackParamList, 'ReminderList'>;

const ReminderListScreen = () => {
  const { user } = useAuthStore();
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<ReminderListNavigationProp>();

  useEffect(() => {
    const loadReminders = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const data = await fetchReminders(user.id);
        setReminders(data);
      } catch (err: any) {
        setError('Failed to fetch reminders.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadReminders();
  }, [user]);

  if (!user?.isPremium) {
    return (
      <View style={styles.container}>
        <Text>This feature is only available for premium users.</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading reminders...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Reminder List Screen</Text>
      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text>{item.time}</Text>
            <Text>{item.protocolId}</Text>
          </View>
        )}
      />
      <Button
        title="Add Reminder"
        onPress={() => navigation.navigate('CreateEditReminder', {})}
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
  reminderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ReminderListScreen;
