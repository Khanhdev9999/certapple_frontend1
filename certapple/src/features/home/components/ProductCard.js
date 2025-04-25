import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      {/* <div
        className="marquee"
        style={{
          backgroundColor: product.marqueeBackground,
          color: product.marqueeColor,
        }}
      >
        <marquee>{product.marqueeText}</marquee>
      </div> */}

      <img src={product.image} alt={product.title} className="product-image" />

      <h3 className="product-title">Gói chứng chỉ: <span> {product.title}</span> </h3> 
        

      <h6 className="product-title1">Thanh toán qua PayPal hoặc USDT:  {product.description}</h6>
      
      <div className="price-info">
        <p><span className="sale-price">{product.salePrice}</span> <s className="sale-price1">{product.price}</s> </p>
        
      </div>

      <div className="detail-btn-wrapper">
  <button className="detail-btn" onClick={() => onSelect(product)}>+</button>
</div>
    </div>
  );
};

export default ProductCard;
