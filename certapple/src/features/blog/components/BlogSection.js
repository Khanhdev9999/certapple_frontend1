// src/features/blog/BlogSection.jsx
import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../blogAPI';
import './BlogSection.css';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then(setBlogs).catch(console.error);
  }, []);

  return (
    <section className="blog-section">
      <h2>Bài viết mới nhất 📚</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <Link to={`/blog/${blog.id}`} className="blog-card">
          <img src={blog.image} alt={blog.title} />
          <h3>{blog.title}</h3>
        </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
