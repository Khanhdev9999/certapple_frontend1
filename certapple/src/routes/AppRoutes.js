import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogDetail from '../features/blog/pages/BlogDetail';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import OrderPage from '../pages/OrderPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Route chi tiết blog cần đặt trước */}
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blog" element={<Blog />} />

      {/* Route bảo vệ */}
      <Route
        path="/don-hang"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
