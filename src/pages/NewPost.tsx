import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Plus,
  User as UserIcon,
  Send
} from 'lucide-react';
import { createPost, getCurrentUser } from '../utils/storage';
import { categories } from '../data/blogData';
import type { User } from '../types';

export default function NewPost() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    modelName: '',
    apiKey: '',
    baseUrl: '',
    category: 'OpenAI',
    isFree: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.modelName || !formData.apiKey || !formData.baseUrl) {
      alert('请填写所有必填项');
      return;
    }

    setIsSubmitting(true);

    try {
      createPost({
        title: formData.title,
        content: formData.content,
        modelName: formData.modelName,
        apiKey: formData.apiKey,
        baseUrl: formData.baseUrl,
        category: formData.category,
        authorName: user?.name || '访客',
        isFree: formData.isFree,
      }, user);
      
      alert('发布成功！');
      navigate('/');
    } catch (error) {
      alert('发布失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
            返回
          </Link>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? '发布中...' : '发布文章'}
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post Header */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">分享免费API Key</h1>
            
            {/* Login Notice */}
            {!user && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <UserIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">
                      您当前未登录。发布后文章将显示为"访客"发布。
                      <Link to="/" className="text-blue-600 hover:underline ml-1" onClick={(e) => {
                        e.preventDefault();
                        const loginBtn = document.querySelector('[data-login-btn]');
                        if (loginBtn) {
                          (loginBtn as HTMLButtonElement).click();
                        }
                      }}>登录</Link>
                      后可以管理您发布的文章。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                标题 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="例如：GPT-4 免费API Key分享"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                分类 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              >
                {categories.filter(cat => cat !== '全部').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                说明内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="介绍一下这个API Key的来源、使用限制、使用注意事项等..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                required
              />
            </div>
          </div>

          {/* API Key Info */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">API 配置信息</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Model Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  模型名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.modelName}
                  onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
                  placeholder="例如：GPT-4、DeepSeek-V3、Claude-3-Opus"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              {/* API Key */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.apiKey}
                  onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                  placeholder="sk-..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono text-sm"
                  required
                />
              </div>
            </div>

            {/* Base URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base URL <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.baseUrl}
                onChange={(e) => setFormData({ ...formData, baseUrl: e.target.value })}
                placeholder="https://api.openai.com/v1"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono text-sm"
                required
              />
            </div>
          </div>

          {/* Ad Slot */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
              <p>广告位</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/"
              className="px-6 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="w-5 h-5" />
              {isSubmitting ? '发布中...' : '发布分享'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
