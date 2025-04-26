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

      <h2 className="modal-heading1">
              Gói chứng chỉ: <span className="modal-title1">{product.title}</span>
            </h2> 
      <p className="modal-subtitle">
              Thanh toán qua PayPal hoặc USDT :  
              <span className="modal-desc"> {product.description}</span>
            </p>

      <div className="price-info">
        <p>Giá VNĐ: <span className="sale-price">{product.salePrice}</span> <s className="sale-price1">{product.price}</s> </p>
        
      </div>

      <div className="detail-btn-wrapper">
  <button className="detail-btn" onClick={() => onSelect(product)}>+</button>
</div>
    </div>
  );
};

export default ProductCard;
