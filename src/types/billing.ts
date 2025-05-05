export interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  description: string;
}

export interface SubscriptionStatus {
  status: 'active' | 'inactive' | 'expired';
  planId: string;
  currentPeriodEnd: string;
}
