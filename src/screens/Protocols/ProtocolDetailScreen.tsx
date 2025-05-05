import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Button from '../../components/Button/Button';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';
import { useTheme } from '../../theme/ThemeProvider';
import { fetchProtocolDetails, ProtocolDetail } from '../../services/api/content';
import useAuthStore from '../../store/authStore';
import useBillingStore from '../../store/billingStore';
import UpgradePrompt from '../../components/UpgradePrompt';

type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolDetail'>;
type ProtocolDetailNavigationProp = NativeStackNavigationProp<ProtocolStackParamList, 'ProtocolDetail'>;

const ProtocolDetailScreen: React.FC<Props> = ({ route }) => {
  const { protocolId } = route.params;
  const [protocol, setProtocol] = useState<ProtocolDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();
  const { subscription } = useBillingStore();
  const theme = useTheme();
  const navigation = useNavigation<ProtocolDetailNavigationProp>();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.neutralBackground1,
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: theme.colors.neutralForeground2,
      marginBottom: 12,
    },
    meta: {
      fontSize: 14,
      color: theme.colors.neutralForeground3,
      marginBottom: 4,
    },
    section: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    step: {
      marginBottom: 15,
      padding: 12,
      backgroundColor: theme.colors.neutralBackground3,
      borderRadius: 8,
    },
    stepTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    stepDescription: {
      fontSize: 14,
      color: theme.colors.neutralForeground2,
      marginBottom: 4,
    },
    stepMeta: {
      fontSize: 12,
      color: theme.colors.neutralForeground3,
    },
    reference: {
      fontSize: 14,
      color: theme.colors.brandForeground1,
      marginBottom: 5,
    },
  });

  useEffect(() => {
    const loadProtocolDetails = async () => {
      try {
        const isPremiumUser = user?.isPremium || subscription?.status === 'active';
        const data = await fetchProtocolDetails(protocolId, isPremiumUser);
        setProtocol(data);
      } catch (err: any) {
        setError('Failed to fetch protocol details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProtocolDetails();
  }, [protocolId, user, subscription]);

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={{ marginTop: 10 }}>Loading Protocol Details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={{ color: theme.colors.statusDangerBackground1 }}>{error}</Text>
      </View>
    );
  }

  if (!protocol) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>Protocol not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>{protocol.title}</Text>
          {protocol.isPremium && (
            <FontAwesome name="star" size={16} color={theme.colors.brandForeground1} style={{marginLeft: 8}} />
          )}
        </View>
        {user?.isPremium ? (
          <Text style={styles.description}>{protocol.description}</Text>
        ) : (
          <Text style={styles.description}>{protocol.description.split('\n')[0]}...</Text>
        )}
        <Text style={styles.meta}>Duration: {protocol.duration}</Text>
        <Text style={styles.meta}>Category: {protocol.category}</Text>

        {user?.isPremium ? (
          protocol.steps && protocol.steps.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Steps:</Text>
              {/* TODO: Check if protocol.steps is large and optimize map performance if needed */}
              {protocol.steps.map((step, index) => (
                <View key={step.id} style={styles.step}>
                  <Text style={styles.stepTitle}>{`${index + 1}. ${step.title}`}</Text>
                  <Text style={styles.stepDescription}>{step.description}</Text>
                  <Text style={styles.stepMeta}>Duration: {step.duration}</Text>
                </View>
              ))}
            </View>
          )
        ) : (
          <UpgradePrompt />
        )}
        {/* TODO: Check if protocol.steps is large and optimize map performance if needed */}
        {/* TODO: Check if protocol.references is large and optimize map performance if needed */}
        <Button
          title="Reminders"
          onPress={() => navigation.navigate('ReminderList')}
          accessibilityLabel="View Reminders"
          accessibilityHint="Navigate to the reminders list"
          accessibilityRole="button"
        />

        {user?.isPremium && protocol.references && protocol.references.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References:</Text>
            {/* TODO: Check if protocol.references is large and optimize map performance if needed */}
            {protocol.references.map((ref, index) => (
              <Text key={index} style={styles.reference}>{`- ${ref}`}</Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProtocolDetailScreen;
