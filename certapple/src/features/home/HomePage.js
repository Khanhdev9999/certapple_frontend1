// src/features/home/HomePage.jsx
import React from 'react';
import Intro from './components/Intro';
import ProductList from './components/ProductList';
import BlogSection from '../blog/components/BlogSection';
import FeatureGrid from '../featuregrid/FeatureGrid';

const HomePage = () => (
  <div>
    <Intro />
    <ProductList />

    <FeatureGrid />
    <BlogSection />
  </div>
);

export default HomePage;
