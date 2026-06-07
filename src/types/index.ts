export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: string;
}

export interface ApiKeyPost {
  id: string;
  title: string;
  content: string;
  modelName: string;
  apiKey: string;
  baseUrl: string;
  author: User;
  authorName: string;
  createdAt: string;
  category: string;
  views: number;
  isFree: boolean;
}

export interface ApiPlatform {
  name: string;
  url: string;
  description: string;
  isPaid: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  icon: string;
}
