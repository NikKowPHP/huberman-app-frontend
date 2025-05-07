import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button/Button';
import useAuthStore from '@/store/authStore';
import { createReminder, updateReminder } from '@/services/api/reminders';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';
import { useTheme } from '../../theme/ThemeProvider';

type CreateEditReminderScreenProps = NativeStackScreenProps<ProtocolStackParamList, 'CreateEditReminder'>;

const CreateEditReminderScreen: React.FC<CreateEditReminderScreenProps> = ({ route, navigation }) => {
  const reminder = route.params?.reminder; // reminder will be undefined for new reminders
  const { user } = useAuthStore();
  const [protocolId, setProtocolId] = useState(route.params?.reminder?.protocolId || '');
  const [time, setTime] = useState(route.params?.reminder?.time || ''); // e.g., "HH:MM"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: theme.colors.neutralForeground3,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    savingText: {
      marginTop: 10,
    },
    errorText: {
      color: theme.colors.statusDangerBackground1,
    },
  });

  useEffect(() => {
    if (reminder) {
      setProtocolId(reminder.protocolId);
      setTime(reminder.time);
    }
  }, [reminder]);

  const handleSave = async () => {
    if (!user) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const reminderData = { protocolId, time, userId: user.id };
      if (reminder) {
        await updateReminder(reminder.id, reminderData);
      } else {
        await createReminder(reminderData);
      }
      navigation.goBack(); // Go back to the reminder list on success
    } catch (err: any) {
      setError('Failed to save reminder.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!user?.isPremium) {
    return (
      <View style={styles.container}>
        <Text>This feature is only available for premium users.</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.savingText}>Saving Reminder...</Text>
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
      <Text style={styles.title}>{reminder ? 'Edit Reminder' : 'Create Reminder'}</Text>
      <CustomTextInput
        style={styles.input}
        placeholder="Protocol ID"
        value={protocolId}
        onChangeText={setProtocolId}
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button
        title="Save Reminder"
        onPress={handleSave}
        accessibilityLabel="Save Reminder"
        accessibilityHint="Save the reminder"
        accessibilityRole="button"
      />
    </View>
  );
};

export default CreateEditReminderScreen;
