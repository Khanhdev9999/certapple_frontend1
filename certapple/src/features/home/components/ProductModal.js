import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="product-modal-body">
          <img src={product.image} alt={product.title} className="modal-image" />
          <div className="modal-info">
            <h2>{product.title}</h2>
            <p>{product.content}</p>
            <p><strong>Giá gốc:</strong> <s>{product.price}</s></p>
            <p><strong>Giá KM:</strong> <span className="highlight">{product.salePrice}</span></p>

            <ul>
              <li><strong>Thời gian xử lý:</strong> {product.waitTime}</li>
              <li><strong>Thời hạn:</strong> {product.usageDuration}</li>
              <li><strong>Bảo hành:</strong> {product.warrantyTime}</li>
              <li><strong>Loại file:</strong> {product.fileType}</li>
              <li><strong>Thiết bị hỗ trợ:</strong> {product.deviceSupport}</li>
              <li><strong>Hệ điều hành:</strong> {product.osSupport}</li>
              <li><strong>Phiên bản:</strong> {product.deviceVersion}</li>
            </ul>

            <div className="modal-actions">
              <button className="buy-now">Mua ngay</button>
              <button className="add-to-cart">Thêm vào giỏ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
