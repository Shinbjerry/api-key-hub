import type { ApiKeyPost, ApiPlatform } from '../types';

export const samplePosts: ApiKeyPost[] = [
  {
    id: '1',
    title: 'GPT-4 免费API Key分享（限时限量）',
    content: '这是一个免费的GPT-4 API Key分享，适用于测试和开发用途。该API Key提供有限的调用次数，请合理使用。',
    modelName: 'GPT-4',
    apiKey: 'sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    baseUrl: 'https://api.openai.com/v1',
    authorName: 'API分享者',
    author: {
      id: '1',
      name: 'API分享者',
      email: 'share@example.com',
      password: '',
      createdAt: '2024-01-01'
    },
    createdAt: '2024-06-01 10:30:00',
    category: 'OpenAI',
    views: 1256,
    isFree: true
  },
  {
    id: '2',
    title: 'DeepSeek-V3 API密钥免费获取',
    content: 'DeepSeek最新V3模型API密钥分享，支持长文本和代码生成。这个API是完全免费的，适合日常使用。',
    modelName: 'DeepSeek-V3',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    baseUrl: 'https://api.deepseek.com',
    authorName: '技术爱好者',
    author: {
      id: '2',
      name: '技术爱好者',
      email: 'tech@example.com',
      password: '',
      createdAt: '2024-02-15'
    },
    createdAt: '2024-06-02 14:20:00',
    category: 'DeepSeek',
    views: 2108,
    isFree: true
  },
  {
    id: '3',
    title: 'Claude 3 API Key分享文档',
    content: '这里分享一个可用的Claude 3 API Key，支持Claude-3-Haiku、Opus和Sonnet模型。使用前请阅读使用指南。',
    modelName: 'Claude-3-Opus',
    apiKey: 'sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    baseUrl: 'https://api.anthropic.com/v1',
    authorName: 'AI探索者',
    author: {
      id: '3',
      name: 'AI探索者',
      email: 'explore@example.com',
      password: '',
      createdAt: '2024-03-10'
    },
    createdAt: '2024-06-03 09:15:00',
    category: 'Anthropic',
    views: 1678,
    isFree: true
  },
  {
    id: '4',
    title: 'Qwen-Max API 免费测试密钥',
    content: '通义千问Qwen-Max API免费分享，支持中文和多轮对话。这个Key提供了一定的免费额度供大家测试使用。',
    modelName: 'Qwen-Max',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    authorName: '云服务达人',
    author: {
      id: '4',
      name: '云服务达人',
      email: 'cloud@example.com',
      password: '',
      createdAt: '2024-04-05'
    },
    createdAt: '2024-06-04 16:45:00',
    category: 'Qwen',
    views: 1834,
    isFree: true
  }
];

export const apiPlatforms: ApiPlatform[] = [
  {
    name: 'OpenAI Platform',
    url: 'https://platform.openai.com',
    description: '官方GPT-4、GPT-3.5 API，稳定可靠',
    isPaid: true
  },
  {
    name: 'DeepSeek 开放平台',
    url: 'https://platform.deepseek.com',
    description: 'DeepSeek官方API，性价比高',
    isPaid: true
  },
  {
    name: 'Anthropic Claude',
    url: 'https://console.anthropic.com',
    description: 'Claude系列模型官方API',
    isPaid: true
  },
  {
    name: '阿里云百炼平台',
    url: 'https://www.aliyun.com/product/bailian',
    description: '通义千问系列模型，中文优化',
    isPaid: true
  },
  {
    name: '月之暗面 Kimi',
    url: 'https://platform.moonshot.cn',
    description: '支持超长上下文的Kimi API',
    isPaid: true
  }
];

export const categories = ['全部', 'OpenAI', 'DeepSeek', 'Anthropic', 'Qwen', 'Kimi', '其他'];
