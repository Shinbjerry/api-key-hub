import { useState, useEffect, useRef } from 'react';
import { Menu, X, Key, User, Mail, Sparkles, ChevronDown, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentUser: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const mainLinks = [
  { name: '首页', href: '#' },
  { name: '免费API密钥', href: '#/free-keys' },
  { name: '付费API密钥', href: '#/paid-keys' },
  { name: 'API指南', href: '#/guides' },
];

const quickLinks = [
  { name: 'API知识介绍', href: '#/api-intro' },
  { name: 'API配置界面', href: '#/api-config' },
  { name: '免费API测试', href: '#/api-test' },
  { name: '购买注意事项', href: '#/purchase-notice' },
  { name: '小说生成示例', href: '#/novel-example' },
  { name: '音频生成示例', href: '#/audio-example' },
];

export default function Navbar({ currentUser, onLogin, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsQuickMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-lg">
              <Key className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold font-heading ${
              scrolled ? 'text-primary-700' : 'text-white'
            }`}>
              API Key Hub
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm">
            <Sparkles className={`w-4 h-4 ${scrolled ? 'text-yellow-500' : 'text-yellow-300'} animate-pulse`} />
            <a 
              href="mailto:shinbjerry@gmail.com" 
              className={`flex items-center gap-1 hover:text-primary-500 transition-colors ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>合作邮箱: shinbjerry@gmail.com</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsQuickMenuOpen(!isQuickMenuOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                快捷菜单
                <ChevronDown className={`w-4 h-4 transition-transform ${isQuickMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isQuickMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <button
                onClick={onLogout}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled 
                    ? 'bg-primary-100 text-primary-700 hover:bg-primary-200' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                退出登录
              </button>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-200 shadow-md"
              >
                <User className="w-4 h-4" />
                登录/注册
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-lg shadow-lg">
            <div className="flex flex-col gap-4">
              {[...mainLinks, ...quickLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4">
                {currentUser ? (
                  <button
                    onClick={() => { onLogout(); setIsOpen(false); }}
                    className="w-full px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium"
                  >
                    退出登录
                  </button>
                ) : (
                  <button
                    onClick={() => { onLogin(); setIsOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <User className="w-4 h-4" />
                    登录/注册
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
