import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f0f2f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ color: '#165DFF', fontSize: '2.5rem', margin: '0 0 1rem 0' }}>API Key Hub</h1>
      <p style={{ color: '#666', fontSize: '1.2rem', margin: 0 }}>免费API密钥分享平台</p>
      <p style={{ color: '#999', marginTop: '2rem' }}>页面加载成功 ✅</p>
    </div>
  </React.StrictMode>
);
