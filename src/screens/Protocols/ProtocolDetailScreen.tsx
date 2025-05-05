import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';
import { fetchProtocolDetails, ProtocolDetail } from '../../services/api/content';

type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolDetail'>;

const ProtocolDetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [protocol, setProtocol] = useState<ProtocolDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProtocolDetails = async () => {
      try {
        const data = await fetchProtocolDetails(id);
        setProtocol(data);
      } catch (err) {
        setError('Failed to fetch protocol details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProtocolDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Loading Protocol Details...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={{ color: 'red' }}>{error}</Text>
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
            <FontAwesome name="star" size={16} color="#FFD700" style={{marginLeft: 8}} />
          )}
        </View>
        <Text style={styles.description}>{protocol.description}</Text>
        <Text style={styles.meta}>Duration: {protocol.duration}</Text>
        <Text style={styles.meta}>Category: {protocol.category}</Text>

        {protocol.steps && protocol.steps.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Steps:</Text>
            {protocol.steps.map((step, index) => (
              <View key={step.id} style={styles.step}>
                <Text style={styles.stepTitle}>{`${index + 1}. ${step.title}`}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
                <Text style={styles.stepMeta}>Duration: {step.duration}</Text>
              </View>
            ))}
          </View>
        )}

        {protocol.references && protocol.references.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References:</Text>
            {protocol.references.map((ref, index) => (
              <Text key={index} style={styles.reference}>{`- ${ref}`}</Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#6c757d',
    marginBottom: 12,
  },
  meta: {
    fontSize: 14,
    color: '#5a6268',
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
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
  stepMeta: {
    fontSize: 12,
    color: '#5a6268',
  },
  reference: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 5,
  },
});

export default ProtocolDetailScreen;
