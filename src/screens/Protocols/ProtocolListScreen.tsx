import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProtocolStackParamList } from '../../navigation/AppStack.d';
import { fetchProtocols, Protocol } from '../../services/api/content';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../theme/ThemeProvider';

type Props = NativeStackScreenProps<ProtocolStackParamList, 'ProtocolList'>;

const ProtocolListScreen: React.FC<Props> = ({ navigation }) => {
  const [protocols, setProtocols] = useState<Protocol[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.neutralBackground1,
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      padding: 16,
    },
    item: {
      padding: '4%',
      marginBottom: '3%',
      backgroundColor: theme.colors.neutralBackground3,
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
      color: theme.colors.neutralForeground2,
    },
    premiumIcon: {
      marginLeft: 8,
    },
  });

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
      onPress={() => navigation.navigate('ProtocolDetail', { protocolId: item.id })}
      accessibilityLabel={`Protocol: ${item.title}`}
      accessibilityHint="View protocol details"
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}>{item.title}</Text>
        {item.isPremium && (
          <FontAwesome name="star" size={16} color={theme.colors.brandForeground1} style={styles.premiumIcon} accessibilityLabel="Premium protocol" />
        )}
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={{ marginTop: 10 }}>Loading Protocols...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={{ color: theme.colors.statusDangerBackground1, fontSize: 16, fontWeight: 'bold' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {protocols.length === 0 && !loading && !error ? (
        <View style={[styles.centered, { flex: 1 }]}>
          <Text>No protocols found.</Text>
        </View>
      ) : (
        // TODO: Optimize FlatList performance
        <FlatList
          data={protocols}
          renderItem={renderProtocolItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default ProtocolListScreen;
