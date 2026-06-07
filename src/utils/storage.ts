import type { User, ApiKeyPost } from '../types';
export type { User };

const USERS_KEY = 'api_key_hub_users';
const STATS_KEY = 'api_key_hub_stats';
const CURRENT_USER_KEY = 'api_key_hub_current_user';
const POSTS_KEY = 'api_key_hub_posts';

export interface Stats {
  totalUsers: number;
  totalPosts: number;
  monthlyNewUsers: number;
}

export function initializeStats(): Stats {
  const existing = localStorage.getItem(STATS_KEY);
  if (!existing) {
    const defaultStats: Stats = {
      totalUsers: 156,
      totalPosts: 23,
      monthlyNewUsers: 42,
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(defaultStats));
    return defaultStats;
  }
  return JSON.parse(existing);
}

export function getStats(): Stats {
  const stats = localStorage.getItem(STATS_KEY);
  return stats ? JSON.parse(stats) : initializeStats();
}

export function updateStats(updates: Partial<Stats>): Stats {
  const current = getStats();
  const updated = { ...current, ...updates };
  localStorage.setItem(STATS_KEY, JSON.stringify(updated));
  return updated;
}

export function getUsers(): User[] {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email === email);
}

export function registerUser(name: string, email: string, password: string): User {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    throw new Error('该邮箱已被注册');
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  const stats = getStats();
  updateStats({
    totalUsers: stats.totalUsers + 1,
    monthlyNewUsers: stats.monthlyNewUsers + 1,
  });
  
  return newUser;
}

export function loginUser(email: string, password: string): User | null {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    setCurrentUser(user);
    return user;
  }
  return null;
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function getCurrentUser(): User | null {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
}

export function logoutUser(): void {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getPosts(): ApiKeyPost[] {
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
}

export function savePosts(posts: ApiKeyPost[]): void {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function createPost(postData: Omit<ApiKeyPost, 'id' | 'author' | 'views' | 'createdAt'>, author: User | null): ApiKeyPost {
  const posts = getPosts();
  
  // 如果未登录，创建一个默认的访客作者
  const authorData: User = author || {
    id: 'guest-' + Date.now(),
    name: '访客',
    email: 'guest@example.com',
    password: '',
    createdAt: new Date().toISOString(),
  };
  
  const newPost: ApiKeyPost = {
    id: Date.now().toString(),
    ...postData,
    author: authorData,
    createdAt: new Date().toISOString(),
    views: 0,
  };
  
  posts.unshift(newPost);
  savePosts(posts);
  
  const stats = getStats();
  updateStats({ totalPosts: stats.totalPosts + 1 });
  
  return newPost;
}

export function incrementPostViews(postId: string): void {
  const posts = getPosts();
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.views += 1;
    savePosts(posts);
  }
}
