import { Key, Check, Sparkles, Zap, Shield, CreditCard } from 'lucide-react';
import { paidProducts } from '../data/mockData';

interface PaidKeysProps {
  currentUser: boolean;
  onLogin: () => void;
}

export default function PaidKeys({ currentUser, onLogin }: PaidKeysProps) {
  const handlePurchase = (productId: string) => {
    if (!currentUser) {
      onLogin();
      return;
    }
    console.log('Purchasing:', productId);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-heading mb-2">付费API密钥</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              选择适合您需求的付费套餐，享受更高额度、更多功能和优先技术支持
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidProducts.map((product, index) => (
            <div
              key={product.id}
              className={`relative card ${
                index === paidProducts.length - 1
                  ? 'border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-cyan-50'
                  : ''
              }`}
            >
              {index === paidProducts.length - 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-primary-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    最受欢迎
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center ${
                  index === paidProducts.length - 1
                    ? 'bg-gradient-to-r from-primary-500 to-cyan-500'
                    : 'bg-primary-100'
                }`}>
                  <Key className={`w-6 h-6 ${
                    index === paidProducts.length - 1 ? 'text-white' : 'text-primary-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-400">¥</span>
                  <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-gray-500">/{product.duration}</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  包含 {product.quota.toLocaleString()} 请求额度
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePurchase(product.id)}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  index === paidProducts.length - 1
                    ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white hover:from-primary-600 hover:to-cyan-600'
                    : currentUser
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                {currentUser ? '立即购买' : '请先登录'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: '即时生效', desc: '购买后立即获得API密钥，即刻开始使用' },
            { icon: Shield, title: '安全支付', desc: '支持多种支付方式，交易安全有保障' },
            { icon: Key, title: '专属密钥', desc: '每个套餐配备独立API密钥，安全可靠' },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 ad-slot">
          <div className="text-gray-400 text-center">
            <p>广告位 - Google AdSense 将在此显示广告</p>
          </div>
        </div>
      </div>
    </div>
  );
}
