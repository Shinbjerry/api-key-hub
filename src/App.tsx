import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import FreeKeys from './pages/FreeKeys';
import PaidKeys from './pages/PaidKeys';
import Guides from './pages/Guides';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('api-key-hub-user');
    if (user) {
      setCurrentUser(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSubmit = (_email: string, _password: string) => {
    localStorage.setItem('api-key-hub-user', JSON.stringify({ email: _email }));
    setCurrentUser(true);
    setIsLoginModalOpen(false);
  };

  const handleRegister = (_name: string, _email: string, _password: string) => {
    localStorage.setItem('api-key-hub-user', JSON.stringify({ email: _email, name: _name }));
    setCurrentUser(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('api-key-hub-user');
    setCurrentUser(false);
  };

  return (
    <HashRouter>
      <Navbar 
        currentUser={currentUser} 
        onLogin={handleLogin} 
        onLogout={handleLogout} 
      />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/free-keys" 
            element={<FreeKeys currentUser={currentUser} onLogin={handleLogin} />} 
          />
          <Route 
            path="/paid-keys" 
            element={<PaidKeys currentUser={currentUser} onLogin={handleLogin} />} 
          />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </main>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onLogin={handleLoginSubmit}
        onRegister={handleRegister}
      />
    </HashRouter>
  );
}
