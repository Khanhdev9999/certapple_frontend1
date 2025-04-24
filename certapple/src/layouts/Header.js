import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/header/logo1.png";
import './Header.css';
import { useAuth } from '../contexts/AuthContext'; // ✅ Dùng context

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ Truy xuất từ context
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();          // ✅ Gọi hàm logout trong context
    navigate('/');     // Điều hướng về trang chủ
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <nav className="desktop-nav">
        <a href="#gioi-thieu">Giới thiệu</a>
        <a href="#don-hang">Đơn hàng</a>
        <a href="#faqs">FAQs</a>
        <a href="#tin-tuc">Tin tức</a>
        <a href="#chia-se">Chia sẻ</a>
        <a href="#ho-tro">Hỗ trợ</a>
        <a href="#ngon-ngu">Ngôn ngữ</a>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className="login">
        {user ? (
          <>
            <span style={{ marginRight: '12px' }}>👋 {user.name}</span>
            <button className="login-btn" onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">Đăng nhập</Link>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="user-info">
            <span className="material-icons">account_circle</span>
            {user && <span>{user.name}</span>}
          </div>
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#don-hang">Đơn hàng</a>
          <a href="#faqs">Câu hỏi thường gặp</a>
          <a href="#tin-tuc">Tin tức</a>
          <a href="#chia-se">Chia sẻ</a>
          <a href="#ho-tro">Hỗ trợ</a>
          <a href="#ngon-ngu">Ngôn ngữ</a>
          <Link to="/blog">Blog</Link>
          {user ? (
            <button className="login-btn" onClick={handleLogout}>Đăng xuất</button>
          ) : (
            <Link to="/login" className="login-btn">Đăng nhập</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
