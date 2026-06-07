import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  ChevronLeft,
  Star,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { apiPlatforms } from '../data/blogData';

export default function PaidPlatforms() {
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            付费API平台
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            以下是官方和可靠的付费API平台，提供稳定的服务和技术支持
          </p>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
            <p>广告位 - Google AdSense</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apiPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow block overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">官方</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-green-500" />
                    <span>稳定</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <span>安全</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">官方推荐</span>
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    访问官网
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Ad Slot */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
            <p>广告位 - Middle</p>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            选择付费API平台的建议
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">优先选择官方平台</h3>
                <p className="text-gray-600 text-sm">直接使用官方API，稳定性和安全性更高</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">注意价格和额度</h3>
                <p className="text-gray-600 text-sm">比较不同平台的定价，选择最适合自己的方案</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">检查响应速度</h3>
                <p className="text-gray-600 text-sm">测试API的响应速度和可用性</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">注意地区限制</h3>
                <p className="text-gray-600 text-sm">部分平台可能有地区访问限制</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Slot */}
        <div className="bg-white rounded-xl shadow-sm p-4 mt-8">
          <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-400">
            <p>广告位 - Bottom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
