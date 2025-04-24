// src/features/home/HomePage.jsx
import React from 'react';
import Intro from './components/Intro';
import ProductList from './components/ProductList';
import BlogSection from '../blog/components/BlogSection';

const HomePage = () => (
  <div>
    <Intro />
    <ProductList />
    <BlogSection />
  </div>
);

export default HomePage;
