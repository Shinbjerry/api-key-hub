import { Key, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { apiPlatforms } from '../data/blogData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                <Key className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                API Key Hub
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              免费分享各类API Key，通过广告支持我们持续分享，帮助更多开发者！
            </p>
            <a
              href="mailto:shinbjerry@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>shinbjerry@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/paid" className="text-gray-400 hover:text-white transition-colors">
                  付费API平台
                </Link>
              </li>
            </ul>
          </div>

          {/* API Platforms */}
          <div>
            <h3 className="text-white font-semibold mb-4">主流API平台</h3>
            <ul className="space-y-2">
              {apiPlatforms.slice(0, 4).map((platform, index) => (
                <li key={index}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 API Key Hub. 感谢您访问，点击广告支持我们！
          </p>
        </div>
      </div>
    </footer>
  );
}
