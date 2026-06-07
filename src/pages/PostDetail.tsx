import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Eye, 
  User as UserIcon, 
  Calendar, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronLeft,
  MessageSquare,
  Heart,
  Lock
} from 'lucide-react';
import { getPosts, incrementPostViews, getCurrentUser } from '../utils/storage';
import { samplePosts, apiPlatforms } from '../data/blogData';
import type { ApiKeyPost, User } from '../types';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<ApiKeyPost | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    if (id) {
      const user = getCurrentUser();
      setCurrentUser(user);
      
      const posts = getPosts();
      let foundPost: ApiKeyPost | null = posts.find(p => p.id === id) || null;
      
      if (!foundPost) {
        const sampleMatch = samplePosts.find(p => p.id === id);
        foundPost = sampleMatch || null;
      }
      
      setPost(foundPost);
      
      if (foundPost) {
        incrementPostViews(id);
      }
    }
  }, [id]);

  const handleCopyKey = () => {
    if (post && currentUser) {
      navigator.clipboard.writeText(post.apiKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  const handleCopyUrl = () => {
    if (post && currentUser) {
      navigator.clipboard.writeText(post.baseUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900">文章不存在</h1>
          <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-5 h-5" />
            返回首页
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Ad Slot */}
            <div className="bg-gray-100 p-6 text-center text-gray-400">
              <p>广告位 - Top</p>
            </div>

            <div className="p-8">
              <header className="mb-8">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span>{post.authorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{post.views} 阅读</span>
                  </div>
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Login Required Notice */}
              {!currentUser && (
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">登录后查看完整API信息</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        为了保护分享者权益，API Key等详细信息需要登录后才能查看和复制。
                      </p>
                      <Link
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          const loginBtn = document.querySelector('[data-login-btn]');
                          if (loginBtn) {
                            (loginBtn as HTMLButtonElement).click();
                          }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                      >
                        <UserIcon className="w-4 h-4" />
                        立即登录
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* API Key Info */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8 border border-blue-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">API 配置信息</h2>
                
                <div className="space-y-4">
                  {/* Model Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">模型名称</label>
                    <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 font-mono text-gray-900">
                      {currentUser ? post.modelName : '登录后可见'}
                    </div>
                  </div>

                  {/* API Key */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                    {currentUser ? (
                      <div className="flex gap-2">
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 px-4 py-3 font-mono text-sm text-gray-700 break-all">
                          {post.apiKey}
                        </div>
                        <button
                          onClick={handleCopyKey}
                          className="flex-shrink-0 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          {copiedKey ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedKey ? '已复制' : '复制'}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-200 rounded-lg px-4 py-3 text-gray-500 text-sm italic">
                        登录后可见
                      </div>
                    )}
                  </div>

                  {/* Base URL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Base URL</label>
                    {currentUser ? (
                      <div className="flex gap-2">
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 px-4 py-3 font-mono text-sm text-gray-700 break-all">
                          {post.baseUrl}
                        </div>
                        <button
                          onClick={handleCopyUrl}
                          className="flex-shrink-0 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                          {copiedUrl ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          <span>{copiedUrl ? '已复制' : '复制'}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="bg-gray-200 rounded-lg px-4 py-3 text-gray-500 text-sm italic">
                        登录后可见
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Ad Slot */}
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400 mb-8">
                <p>广告位 - Middle</p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>收藏</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                    <span>分享</span>
                  </button>
                </div>
                <Link
                  to="/post/new"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  分享你的API Key
                </Link>
              </div>
            </div>

            {/* Ad Slot */}
            <div className="bg-gray-100 p-6 text-center text-gray-400">
              <p>广告位 - Bottom</p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            {/* Paid API Platforms */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                付费API平台
              </h3>
              <div className="space-y-3">
                {apiPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{platform.name}</div>
                    <div className="text-sm text-gray-500">{platform.description}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Ad Slot */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
                <p>广告位</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
