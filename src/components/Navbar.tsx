import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Key, User, Mail, Plus, ExternalLink } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

interface NavbarProps {
  currentUser: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Navbar({ currentUser, onLogin, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                <Key className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                API Key Hub
              </span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>
              首页
            </Link>
            
            {currentUser && (
              <Link to="/post/new" className={`font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}>
                分享
              </Link>
            )}
            
            <Link to="/paid" className={`font-medium transition-colors flex items-center gap-1 ${
              scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>
              付费API
              <ExternalLink className="w-4 h-4" />
            </Link>

            <a 
              href="mailto:shinbjerry@gmail.com" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-500 hover:text-blue-600' : 'text-white/70 hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>合作邮箱</span>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className={`font-medium ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}>
                    {currentUser.name}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    scrolled 
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <button
                  data-login-btn
                  onClick={onLogin}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    scrolled 
                      ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200' 
                      : 'bg-white text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  登录
                </button>
                <Link
                  to="/post/new"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    scrolled 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  分享
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              首页
            </Link>
            
            {currentUser && (
              <Link to="/post/new" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                分享API Key
              </Link>
            )}
            
            <Link to="/paid" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              付费API平台
            </Link>

            <a 
              href="mailto:shinbjerry@gmail.com" 
              className="block px-3 py-2 text-gray-500 hover:text-blue-600 text-sm"
            >
              合作邮箱
            </a>

            <div className="pt-4 border-t">
              {currentUser ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">
                      {currentUser.name}
                    </span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                  >
                    退出登录
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    data-login-btn
                    onClick={onLogin}
                    className="w-full px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    登录
                  </button>
                  <Link
                    to="/post/new"
                    className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    分享API Key
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
