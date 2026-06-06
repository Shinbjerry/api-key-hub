import { ApiKey, Product, Tutorial, Category } from '../types';

export const freeApiKeys: ApiKey[] = [
  {
    id: 'free-1',
    name: 'OpenAI API 免费额度',
    provider: 'OpenAI',
    description: '访问GPT-3.5和GPT-4模型的免费试用额度，每月限量发放',
    quota: 1000,
    remaining: 156,
    type: 'free',
    features: ['GPT-3.5访问', '1000 tokens/月', '基础API调用'],
    category: 'AI/机器学习'
  },
  {
    id: 'free-2',
    name: 'Google Maps API',
    provider: 'Google',
    description: 'Google地图服务的免费额度，适合小型项目使用',
    quota: 2000,
    remaining: 892,
    type: 'free',
    features: ['地图显示', '地理编码', '2000请求/月'],
    category: '地图服务'
  },
  {
    id: 'free-3',
    name: 'Weather API',
    provider: 'OpenWeatherMap',
    description: '全球天气数据API，提供实时天气和预报信息',
    quota: 10000,
    remaining: 3421,
    type: 'free',
    features: ['实时天气', '7天预报', '10000请求/天'],
    category: '天气服务'
  },
  {
    id: 'free-4',
    name: 'News API',
    provider: 'NewsAPI',
    description: '全球新闻聚合API，获取来自数千个来源的新闻',
    quota: 100,
    remaining: 45,
    type: 'free',
    features: ['新闻搜索', '头条新闻', '100请求/天'],
    category: '新闻服务'
  },
  {
    id: 'free-5',
    name: 'IP Geolocation API',
    provider: 'IPinfo',
    description: 'IP地址地理位置查询服务，支持IPv4和IPv6',
    quota: 50000,
    remaining: 12345,
    type: 'free',
    features: ['IP查询', '地理位置', '50000请求/月'],
    category: '工具服务'
  },
  {
    id: 'free-6',
    name: 'Currency Exchange API',
    provider: 'ExchangeRate-API',
    description: '实时汇率数据API，支持160+种货币',
    quota: 1500,
    remaining: 678,
    type: 'free',
    features: ['实时汇率', '历史数据', '1500请求/月'],
    category: '金融服务'
  }
];

export const paidProducts: Product[] = [
  {
    id: 'paid-1',
    name: 'OpenAI Pro',
    description: '完整访问OpenAI的所有模型，包含GPT-4和DALL-E',
    price: 99,
    features: ['GPT-4访问', 'DALL-E图像生成', '100K tokens/月', '优先支持', 'API访问权限'],
    apiKeyType: 'OpenAI API Key',
    quota: 100000,
    duration: '月'
  },
  {
    id: 'paid-2',
    name: 'Google Maps Premium',
    description: '高级地图服务，支持大量请求和高级功能',
    price: 49,
    features: ['无限请求', '高级分析', '自定义样式', '批量地理编码', '技术支持'],
    apiKeyType: 'Google Maps API Key',
    quota: 1000000,
    duration: '月'
  },
  {
    id: 'paid-3',
    name: 'Weather Pro',
    description: '专业级天气数据服务，包含历史数据和预警',
    price: 29,
    features: ['实时天气', '历史数据', '气象预警', '全球覆盖', '批量查询'],
    apiKeyType: 'Weather API Key',
    quota: 1000000,
    duration: '月'
  },
  {
    id: 'paid-4',
    name: 'News Enterprise',
    description: '企业级新闻聚合服务，支持定制化需求',
    price: 149,
    features: ['无限请求', '全文检索', '定制源', '数据导出', '专属客服'],
    apiKeyType: 'News API Key',
    quota: 100000,
    duration: '月'
  },
  {
    id: 'paid-5',
    name: 'All-in-One Bundle',
    description: '所有API服务的综合套餐，最优惠的选择',
    price: 199,
    features: ['所有免费API', '所有付费API', '无限请求', '专属支持', '优先更新'],
    apiKeyType: '综合API密钥',
    quota: 10000000,
    duration: '月'
  }
];

export const tutorials: Tutorial[] = [
  {
    id: 'tut-1',
    title: '如何使用OpenAI API构建聊天机器人',
    description: '详细介绍如何使用OpenAI API创建您的第一个AI聊天机器人应用',
    category: 'AI/机器学习',
    readTime: '15分钟',
    author: '张开发',
    date: '2024-01-15'
  },
  {
    id: 'tut-2',
    title: 'Google Maps API入门指南',
    description: '从基础到进阶，学习如何在您的应用中集成Google地图',
    category: '地图服务',
    readTime: '20分钟',
    author: '李技术',
    date: '2024-01-12'
  },
  {
    id: 'tut-3',
    title: '使用Weather API构建天气预报应用',
    description: '学习如何获取和展示实时天气数据',
    category: '天气服务',
    readTime: '12分钟',
    author: '王编程',
    date: '2024-01-10'
  },
  {
    id: 'tut-4',
    title: 'API密钥安全最佳实践',
    description: '保护您的API密钥不被泄露的重要技巧和方法',
    category: '安全',
    readTime: '10分钟',
    author: '赵安全',
    date: '2024-01-08'
  },
  {
    id: 'tut-5',
    title: '如何优化API调用性能',
    description: '提高API调用效率的实用技巧和策略',
    category: '性能优化',
    readTime: '18分钟',
    author: '孙性能',
    date: '2024-01-05'
  },
  {
    id: 'tut-6',
    title: 'RESTful API设计原则',
    description: '学习设计优雅、可扩展的RESTful API',
    category: 'API设计',
    readTime: '25分钟',
    author: '周架构',
    date: '2024-01-03'
  }
];

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'AI/机器学习',
    icon: 'Brain',
    description: '人工智能和机器学习相关API',
    count: 12
  },
  {
    id: 'cat-2',
    name: '地图服务',
    icon: 'Map',
    description: '地理信息和地图服务API',
    count: 8
  },
  {
    id: 'cat-3',
    name: '天气服务',
    icon: 'Cloud',
    description: '天气数据和预报API',
    count: 6
  },
  {
    id: 'cat-4',
    name: '新闻服务',
    icon: 'Newspaper',
    description: '新闻聚合和资讯API',
    count: 10
  },
  {
    id: 'cat-5',
    name: '金融服务',
    icon: 'TrendingUp',
    description: '金融数据和交易API',
    count: 15
  },
  {
    id: 'cat-6',
    name: '工具服务',
    icon: 'Wrench',
    description: '开发工具和实用API',
    count: 20
  }
];
