import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>404 - Không tìm thấy nội dung</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <Link to="/" style={{ color: '#1a73e8', textDecoration: 'underline' }}>
        ⬅️ Quay về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
