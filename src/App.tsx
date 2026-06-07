import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import PaidPlatforms from './pages/PaidPlatforms';
import { 
  getCurrentUser, 
  loginUser, 
  registerUser, 
  logoutUser, 
  initializeStats,
  User
} from './utils/storage';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUserState] = useState<User | null>(null);

  useEffect(() => {
    initializeStats();
    const user = getCurrentUser();
    setCurrentUserState(user);
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSubmit = (email: string, password: string) => {
    const user = loginUser(email, password);
    if (user) {
      setCurrentUserState(user);
      setIsLoginModalOpen(false);
    } else {
      alert('邮箱或密码错误');
    }
  };

  const handleRegister = (name: string, email: string, password: string) => {
    try {
      const user = registerUser(name, email, password);
      setCurrentUserState(user);
      setIsLoginModalOpen(false);
    } catch (e) {
      alert(e instanceof Error ? e.message : '注册失败');
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUserState(null);
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
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="/paid" element={<PaidPlatforms />} />
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
