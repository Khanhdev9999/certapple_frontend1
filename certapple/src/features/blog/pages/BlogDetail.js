import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogById } from '../blogAPI';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogById(id)
      .then(setBlog)
      .catch((err) => {
        console.error("Lỗi load blog:", err);
        navigate('/not-found', { replace: true });
      });
  }, [id, navigate]);

  if (!blog) return <p>Đang tải bài viết...</p>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p style={{ fontSize: 13, color: '#888' }}>🗓 {blog.date}</p>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', borderRadius: 8, margin: '16px 0' }} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
