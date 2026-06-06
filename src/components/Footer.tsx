import { Key, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

const footerLinks = {
  product: [
    { name: '免费API密钥', href: '#/free-keys' },
    { name: '付费API密钥', href: '#/paid-keys' },
    { name: 'API指南', href: '#/guides' },
    { name: 'API状态', href: '#/status' },
  ],
  company: [
    { name: '关于我们', href: '#/about' },
    { name: '联系我们', href: '#/contact' },
    { name: '隐私政策', href: '#/privacy' },
    { name: '服务条款', href: '#/terms' },
  ],
  resources: [
    { name: '文档中心', href: '#/docs' },
    { name: '开发者社区', href: '#/community' },
    { name: '帮助中心', href: '#/help' },
    { name: 'API更新', href: '#/changelog' },
  ],
  apiPlatforms: [
    { name: 'GPT API平台', href: 'https://platform.openai.com', official: true },
    { name: 'Gemini API平台', href: 'https://ai.google.dev', official: true },
    { name: 'DeepSeek', href: 'https://www.deepseek.com', official: true },
    { name: 'Kimi', href: 'https://kimi.moonshot.cn', official: true },
    { name: 'Qwen', href: 'https://www.qwen.tech', official: true },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-lg">
                <Key className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-white">
                API Key Hub
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              为开发者提供免费和付费API密钥的一站式平台，帮助您快速接入各类API服务。
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">公司</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">主流API平台</h3>
            <ul className="space-y-2">
              {footerLinks.apiPlatforms.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 API Key Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#/privacy" className="text-gray-500 hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#/terms" className="text-gray-500 hover:text-white transition-colors">
              服务条款
            </a>
            <a href="#/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookie设置
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
