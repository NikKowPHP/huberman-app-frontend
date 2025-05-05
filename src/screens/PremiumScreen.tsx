import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Alert, Platform } from 'react-native';
import { fetchPlans } from '../services/api/billing';
import { Plan } from '../types/billing';
import Button from '../components/Button/Button';
import * as RNIap from 'react-native-iap';
import Card from '../components/Card';

const itemSkus = Platform.select({
  ios: [
    'premium_monthly', // Replace with your actual iOS product IDs
    'premium_annual',
  ],
  android: [
    'premium_monthly', // Replace with your actual Android product IDs
    'premium_annual',
  ],
  default: [],
});

const PremiumScreen: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<RNIap.Product[]>([]);

  useEffect(() => {
    const initializeIap = async () => {
      try {
        await RNIap.initConnection();
        const availableProducts = await RNIap.getProducts({ skus: itemSkus });
        setProducts(availableProducts);
      } catch (err: any) {
        console.warn(err); // standardized err.code and err.message available
        Alert.alert('IAP Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    const loadPlans = async () => {
      try {
        const fetchedPlans = await fetchPlans();
        setPlans(fetchedPlans);
      } catch (error) {
        console.error('Failed to fetch plans:', error);
        Alert.alert('Error', 'Failed to load subscription plans.');
      }
    };

    initializeIap();
    loadPlans();

    return () => {
      RNIap.endConnection();
    };
  }, []);

  const requestSubscription = async (sku: string) => {
    try {
      await RNIap.requestSubscription({ sku });
      // Purchase success will be handled by backend webhook
      Alert.alert('Purchase Initiated', 'Your purchase is being processed. Your subscription status will update shortly.');
    } catch (err: any) {
      console.warn(err);
      Alert.alert('Purchase Error', err.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Go Premium</Text>
      <Text style={styles.description}>Unlock all features with a premium subscription.</Text>

      {plans.map((plan) => {
        const product = products.find(p => p.productId === plan.id);
        if (!product) return null;

        return (
          <Card key={plan.id} style={styles.planCard}>
            <Text style={styles.planName}>{plan.name}</Text>
            <Text style={styles.planPrice}>{product.localizedPrice}</Text>
            <Text style={styles.planDescription}>{plan.description}</Text>
            <Button title={`Subscribe to ${plan.name}`} onPress={() => requestSubscription(product.productId)} />
          </Card>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666',
  },
  planCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PremiumScreen;
