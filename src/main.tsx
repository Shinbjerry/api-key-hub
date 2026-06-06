import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// 全局样式(tailwind必须引入)
import './index.css'

// 页面导入
import Home from './pages/Home'
import FreeKeys from './pages/FreeKeys'
import PaidKeys from './pages/PaidKeys'
import Guides from './pages/Guides'

// 路由配置，basename和vite base统一
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/free', element: <FreeKeys /> },
  { path: '/paid', element: <PaidKeys /> },
  { path: '/guides', element: <Guides /> },
], { basename: '/api-key-hub' })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)