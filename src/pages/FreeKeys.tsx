import { useState } from 'react';
import { Key, Clock, Gift, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { freeApiKeys } from '../data/mockData';

interface FreeKeysProps {
  currentUser: boolean;
  onLogin: () => void;
}

export default function FreeKeys({ currentUser, onLogin }: FreeKeysProps) {
  const [claimedKeys, setClaimedKeys] = useState<string[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleClaim = (keyId: string) => {
    if (!currentUser) {
      onLogin();
      return;
    }
    
    if (claimedKeys.includes(keyId)) {
      return;
    }
    
    setClaimedKeys([...claimedKeys, keyId]);
  };

  const handleCopy = (keyValue: string) => {
    navigator.clipboard.writeText(keyValue);
    setCopiedKey(keyValue);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-heading mb-2">免费API密钥</h1>
              <p className="text-white/80">
                免费限量发放的API密钥，适合个人开发者和小型项目使用
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Gift className="w-5 h-5" />
                <span>限量供应</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>每月更新</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {freeApiKeys.map((apiKey) => {
              const isClaimed = claimedKeys.includes(apiKey.id);
              const availability = (apiKey.remaining / apiKey.quota) * 100;
              
              return (
                <div
                  key={apiKey.id}
                  className={`card ${isClaimed ? 'border-2 border-green-500' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isClaimed 
                          ? 'bg-green-100' 
                          : 'bg-gradient-to-r from-primary-100 to-cyan-100'
                      }`}>
                        <Key className={`w-6 h-6 ${isClaimed ? 'text-green-600' : 'text-primary-600'}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{apiKey.name}</h3>
                          <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {apiKey.provider}
                          </span>
                        </div>
                        {isClaimed && (
                          <div className="flex items-center gap-1 text-green-600 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>已领取</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{apiKey.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {apiKey.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">剩余额度</span>
                            <span className={`font-medium ${availability < 30 ? 'text-red-600' : 'text-gray-900'}`}>
                              {apiKey.remaining} / {apiKey.quota}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                availability < 30 ? 'bg-red-500' : 'bg-gradient-to-r from-primary-500 to-cyan-500'
                              }`}
                              style={{ width: `${availability}%` }}
                            />
                          </div>
                        </div>
                        
                        {!isClaimed ? (
                          <button
                            onClick={() => handleClaim(apiKey.id)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                              currentUser
                                ? 'bg-primary-600 text-white hover:bg-primary-700'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            立即领取
                          </button>
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm text-gray-700">
                              sk-xxxxxxxxxxxx
                            </div>
                            <button
                              onClick={() => handleCopy('sk-xxxxxxxxxxxx')}
                              className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                            >
                              {copiedKey === 'sk-xxxxxxxxxxxx' ? (
                                <Check className="w-5 h-5" />
                              ) : (
                                <Copy className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-4">
            <div className="ad-slot">
              <div className="text-gray-400 text-center">
                <p>广告位</p>
              </div>
            </div>

            <div className="card">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                使用须知
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>每个账户每月可领取一次免费密钥</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>免费密钥有使用额度限制，请合理使用</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>密钥到期后将自动失效，请及时领取新密钥</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>请妥善保管您的密钥，切勿泄露给他人</span>
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-primary-500 to-cyan-500 text-white">
              <h3 className="font-semibold mb-2">需要更多额度？</h3>
              <p className="text-white/80 text-sm mb-4">
                升级到付费套餐，享受无限请求额度和更多高级功能
              </p>
              <a href="#/paid-keys" className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                浏览付费套餐
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
