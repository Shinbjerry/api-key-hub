import { ArrowRight, Zap, Shield, Globe, Brain, Map, Cloud, Newspaper, TrendingUp, Wrench } from 'lucide-react';
import { categories, freeApiKeys, tutorials } from '../data/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Map,
  Cloud,
  Newspaper,
  TrendingUp,
  Wrench,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="hero-gradient text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                API密钥
                <span className="block text-cyan-300">一站式获取平台</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                提供免费限量API密钥和优质付费API服务，助您快速构建强大的应用程序。无需复杂配置，即刻开始开发。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#/free-keys" className="btn-primary inline-flex items-center justify-center gap-2">
                  获取免费密钥
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#/paid-keys" className="btn-secondary inline-flex items-center justify-center gap-2">
                  浏览付费服务
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-primary-500 rounded-xl mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">已发放API密钥</h3>
                    <p className="text-4xl font-bold mt-2">10,000+</p>
                    <p className="text-white/60 text-sm">每月新增用户</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white/10 rounded-lg">
                      <p className="text-2xl font-bold">50+</p>
                      <p className="text-xs text-white/60">API服务</p>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-lg">
                      <p className="text-2xl font-bold">99.9%</p>
                      <p className="text-xs text-white/60">可用性</p>
                    </div>
                    <div className="text-center p-3 bg-white/10 rounded-lg">
                      <p className="text-2xl font-bold">24/7</p>
                      <p className="text-xs text-white/60">技术支持</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ad-slot">
        <div className="text-gray-400 text-center">
          <p>广告位 - Google AdSense 将在此显示广告</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
              热门API分类
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              浏览我们精选的API服务分类，找到最适合您项目需求的解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Brain;
              return (
                <a
                  key={category.id}
                  href="#/free-keys"
                  className="card card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-primary-100 to-cyan-100 rounded-xl group-hover:from-primary-200 group-hover:to-cyan-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {category.count} 个服务
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                为什么选择我们？
              </h2>
              <p className="text-gray-600 mb-8">
                我们致力于为开发者提供最便捷的API密钥获取体验，无论是免费试用还是付费服务，都能满足您的需求。
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: '快速接入', desc: '一键获取API密钥，即刻开始使用' },
                  { icon: Shield, title: '安全可靠', desc: '严格的安全措施保护您的密钥' },
                  { icon: Globe, title: '全球加速', desc: 'CDN加速，全球低延迟访问' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">免费API密钥精选</h3>
                <div className="space-y-3">
                  {freeApiKeys.slice(0, 3).map((key) => (
                    <div
                      key={key.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{key.name}</h4>
                        <p className="text-sm text-gray-500">{key.provider}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                        {key.remaining} 可用
                      </span>
                    </div>
                  ))}
                </div>
                <a href="#/free-keys" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                  查看全部免费密钥
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
              最新API指南
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              学习如何更好地使用API，提升您的开发效率
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.slice(0, 3).map((tutorial) => (
              <a
                key={tutorial.id}
                href="#/guides"
                className="card card-hover group"
              >
                <div className="mb-4">
                  <div className="h-32 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {tutorial.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tutorial.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {tutorial.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">
            开始您的API之旅
          </h2>
          <p className="text-white/80 mb-8">
            加入数千名开发者的行列，快速获取所需的API密钥，加速您的项目开发
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/free-keys" className="btn-primary inline-flex items-center justify-center gap-2">
              免费开始
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#/guides" className="btn-outline inline-flex items-center justify-center gap-2">
              了解更多
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
