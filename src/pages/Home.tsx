import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  User as UserIcon, 
  Plus, 
  Calendar, 
  ExternalLink, 
  Search, 
  ChevronRight,
  Lock,
  Unlock
} from 'lucide-react';
import { samplePosts, apiPlatforms, categories } from '../data/blogData';
import { getPosts, getStats, Stats, initializeStats, savePosts, getCurrentUser } from '../utils/storage';
import type { ApiKeyPost, User } from '../types';

export default function Home() {
  const [posts, setPosts] = useState<ApiKeyPost[]>([]);
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, totalPosts: 0, monthlyNewUsers: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    initializeStats();
    const user = getCurrentUser();
    setCurrentUser(user);
    const savedPosts = getPosts();
    if (savedPosts.length === 0) {
      savePosts(samplePosts);
      setPosts(samplePosts);
    } else {
      setPosts(savedPosts);
    }
    setStats(getStats());
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === '全部' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.modelName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                API Key 分享平台
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                免费分享各类API密钥，支持GPT-4、DeepSeek、Claude等主流模型。
                通过广告支持我们继续分享，帮助更多开发者。
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  to="/post/new"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  分享API Key
                </Link>
                <Link 
                  to="/paid"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  付费API平台
                </Link>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold">{stats.totalPosts}</div>
                  <div className="text-sm text-white/80">分享文章</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold">{stats.totalUsers}</div>
                  <div className="text-sm text-white/80">注册用户</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-bold">{stats.monthlyNewUsers}</div>
                  <div className="text-sm text-white/80">本月新增</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot 1 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
            <p>广告位 - Google AdSense</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜索API Key、模型名称..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Login Notice Banner */}
            {!currentUser && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">登录后查看完整API信息</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      为了保护分享者权益，API Key等详细信息需要登录后才能查看。登录后您将看到完整的模型名称、API Key和Base URL。
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

            {/* Posts List */}
            <div className="space-y-6">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <p className="text-gray-500 text-lg">暂无相关API Key分享</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-2">
                            {post.category}
                          </span>
                          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                            <Link to={`/post/${post.id}`}>
                              {post.title}
                            </Link>
                          </h2>
                        </div>
                        {currentUser ? (
                          <Unlock className="w-5 h-5 text-green-600" />
                        ) : (
                          <Lock className="w-5 h-5 text-gray-400" />
                        )}
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>

                      {/* Key Info - Conditionally Rendered */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <span className="text-xs text-gray-500 block mb-1">模型名称</span>
                            {currentUser ? (
                              <span className="font-mono text-sm font-medium text-gray-900">{post.modelName}</span>
                            ) : (
                              <span className="text-sm text-gray-400 italic">登录后可见</span>
                            )}
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block mb-1">API Key</span>
                            {currentUser ? (
                              <span className="font-mono text-sm text-gray-700 truncate block">{post.apiKey}</span>
                            ) : (
                              <span className="text-sm text-gray-400 italic">登录后可见</span>
                            )}
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block mb-1">Base URL</span>
                            {currentUser ? (
                              <span className="font-mono text-xs text-gray-700 truncate block">{post.baseUrl}</span>
                            ) : (
                              <span className="text-sm text-gray-400 italic">登录后可见</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Post Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <UserIcon className="w-4 h-4" />
                            <span>{post.authorName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views} 阅读</span>
                          </div>
                        </div>
                        <Link
                          to={`/post/${post.id}`}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {currentUser ? '查看详情' : '登录后查看'}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            {/* Ad Slot 2 */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
                <p>广告位 - Sidebar</p>
              </div>
            </div>

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

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4">最新分享</h3>
              <div className="space-y-3">
                {posts.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    to={`/post/${post.id}`}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="font-medium text-gray-900 text-sm line-clamp-2">
                      {post.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {post.modelName} · {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ad Slot 3 */}
            <div className="bg-white rounded-xl shadow-sm p-4 mt-6">
              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-400">
                <p>广告位</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
