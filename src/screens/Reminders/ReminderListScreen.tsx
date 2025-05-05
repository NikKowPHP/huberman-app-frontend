import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import useAuthStore from '../../store/authStore';
import { fetchReminders } from '../../services/api/reminders';
import { useTheme } from '../../theme/ThemeProvider';
import UpgradePrompt from '../../components/UpgradePrompt';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';

type ReminderListScreenNavigationProp = NavigationProp<ProtocolStackParamList, 'ReminderList'>;

const ReminderListScreen = () => {
  const navigation = useNavigation<ReminderListScreenNavigationProp>();
  const { user } = useAuthStore();
  const [reminders, setReminders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    reminderItem: {
      padding: '3%',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: 10,
    },
    errorText: {
      color: theme.colors.statusDangerBackground1,
      fontSize: 16,
      fontWeight: 'bold',
    },
    noRemindersContainer: {
      flex: 1,
    },
  });

  useEffect(() => {
    const loadReminders = async () => {
      if (!user) {
        return;
      }
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
        <UpgradePrompt />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading reminders...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {reminders.length === 0 ? (
        <View style={[styles.centered, styles.noRemindersContainer]} accessibilityLabel="No reminders found">
          <Text>No reminders found.</Text>
        </View>
      ) : (
        <FlatList
          data={reminders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.reminderItem} accessibilityLabel={`Reminder: ${item.time}, Protocol: ${item.protocolId}`}>
              <Text>{item.time}</Text>
              <Text>{item.protocolId}</Text>
            </View>
          )}
          accessibilityLabel="List of reminders"
        />
      )}
      <Button
        title="Add Reminder"
        onPress={() => {
          navigation.navigate('CreateEditReminder', { reminder: undefined as any });
        }}
      />
    </View>
  );
};

export default ReminderListScreen;
