export interface ApiKey {
  id: string;
  name: string;
  provider: string;
  description: string;
  quota: number;
  remaining: number;
  type: 'free' | 'paid';
  price?: number;
  features: string[];
  category: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  apiKeyType: string;
  quota: number;
  duration: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface ClaimResponse {
  success: boolean;
  message: string;
  key?: string;
  expiresAt?: string;
}

export interface PurchaseResponse {
  success: boolean;
  message: string;
  key?: string;
  stripeSessionId?: string;
}
