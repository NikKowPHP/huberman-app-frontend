import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';
import { fetchProtocols, Protocol } from '../../services/api/content';
import { FontAwesome } from '@expo/vector-icons'; // Or any other icon library

type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolList'>;

const ProtocolListScreen: React.FC<Props> = ({ navigation }) => {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProtocols = async () => {
      try {
        const data = await fetchProtocols();
        setProtocols(data);
      } catch (err) {
        setError('Failed to fetch protocols.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProtocols();
  }, []);

  const renderProtocolItem = ({ item }: { item: Protocol }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProtocolDetail', { id: item.id })}
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        {item.isPremium && (
          <FontAwesome name="star" size={16} color="#FFD700" style={styles.premiumIcon} />
        )}
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Loading Protocols...</Text>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={protocols}
        renderItem={renderProtocolItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
  },
  premiumIcon: {
    marginLeft: 8,
  },
});

export default ProtocolListScreen;
