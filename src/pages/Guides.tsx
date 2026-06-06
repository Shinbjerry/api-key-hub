import { BookOpen, Clock, User, Calendar, ArrowRight, Search } from 'lucide-react';
import { tutorials } from '../data/mockData';

const categories = ['全部', 'AI/机器学习', '地图服务', '天气服务', '安全', '性能优化', 'API设计'];

export default function Guides() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-cyan-600 to-primary-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-heading mb-2">API指南</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              学习如何更好地使用API服务，提升您的开发效率和项目质量
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  category === '全部'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索教程..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <a
              key={tutorial.id}
              href="#"
              className="card card-hover group"
            >
              <div className="mb-4">
                <div className="h-40 bg-gradient-to-br from-primary-400 to-cyan-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <BookOpen className="w-12 h-12 text-white/80" />
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">
                  {tutorial.category}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <Clock className="w-3 h-3" />
                  {tutorial.readTime}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                {tutorial.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {tutorial.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">{tutorial.author}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  <Calendar className="w-3 h-3" />
                  {tutorial.date}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
            查看更多教程
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-12 ad-slot">
          <div className="text-gray-400 text-center">
            <p>广告位 - Google AdSense 将在此显示广告</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-gradient-to-br from-primary-50 to-cyan-50">
            <h3 className="font-semibold text-gray-900 mb-4">API使用最佳实践</h3>
            <ul className="space-y-3">
              {[
                '合理设置API调用频率限制',
                '使用缓存减少重复请求',
                '妥善保管API密钥',
                '实现优雅的错误处理',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary-200 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">热门API资源</h3>
            <ul className="space-y-2">
              {[
                { name: 'REST API设计指南', url: '#' },
                { name: 'GraphQL入门教程', url: '#' },
                { name: 'API安全防护手册', url: '#' },
                { name: 'API性能优化技巧', url: '#' },
              ].map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    className="flex items-center justify-between py-2 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <span>{resource.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
