import React from 'react';
import './ProductActionButton.css';

const ProductActionButton = ({ color = '', onClick, children }) => {
  return (
    <button className={`btn ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ProductActionButton;
