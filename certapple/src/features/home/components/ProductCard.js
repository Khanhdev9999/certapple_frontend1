import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card">
      {/* MARQUEE */}
      <div
        className="marquee"
        style={{
          backgroundColor: product.marqueeBackground,
          color: product.marqueeColor,
        }}
      >
        <marquee>{product.marqueeText}</marquee>
      </div>

      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p className="product-content">{product.content}</p>

      <p><strong>Giá gốc:</strong> <s>{product.price}</s></p>
      <p><strong>Giá khuyến mãi:</strong> <span className="sale-price">{product.salePrice}</span></p>

      <ul className="product-specs">
        <li><strong>Thời gian xử lý:</strong> {product.waitTime}</li>
        <li><strong>Thời hạn:</strong> {product.usageDuration}</li>
        <li><strong>Bảo hành:</strong> {product.warrantyTime}</li>
        <li><strong>Loại file:</strong> {product.fileType}</li>
        <li><strong>Thiết bị hỗ trợ:</strong> {product.deviceSupport}</li>
        <li><strong>Hệ điều hành:</strong> {product.osSupport}</li>
        <li><strong>Phiên bản:</strong> {product.deviceVersion}</li>
      </ul>

      <button onClick={() => onSelect(product)}>Chi tiết</button>
    </div>
  );
};

export default ProductCard;
