// src/features/blog/blogAPI.js

export async function fetchBlogs() {
  const res = await fetch('http://localhost:3001/blogs');
  if (!res.ok) throw new Error('Không thể tải blog');
  return res.json();
}

export async function fetchBlogById(id) {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);
  if (!res.ok) throw new Error('Không thể tải blog chi tiết');
  return res.json();
}
