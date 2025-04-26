import React from 'react';
import './ProductModal.css';
import PurchaseOptions from './PurchaseOptions'; // Đảm bảo đúng đường dẫn

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="product-modal-body">
          {/* Nội dung bên trái */}
          <div className="modal-info">
            <h2 className="modal-heading">
              Gói chứng chỉ: <span className="modal-title">{product.title}</span>
            </h2>
            <p className="modal-subtitle">
              Thanh toán qua PayPal hoặc USDT bằng:
              <span className="modal-desc">{product.description}</span>
            </p>

            <div
              className="marquee"
              style={{
                backgroundColor: product.marqueeBackground,
                color: product.marqueeColor,
              }}
            >
              <marquee>{product.marqueeText}</marquee>
            </div>

            <p className="modal-p-content">{product.content}</p>

            {/* Thay thế phần ul/li bằng bảng */}
            <table className="product-info-table">
              <tbody>
                <tr>
                  <td><strong>Thời gian chờ:</strong></td>
                  <td>{product.waitTime}</td>
                </tr>
                <tr>
                  <td><strong>Thời hạn:</strong></td>
                  <td>{product.usageDuration}</td>
                </tr>
                <tr>
                  <td><strong>Bảo hành:</strong></td>
                  <td>{product.warrantyTime}</td>
                </tr>
                <tr>
                  <td><strong>File chứng chỉ:</strong></td>
                  <td>{product.fileType}</td>
                </tr>
                <tr>
                  <td><strong>Đổi thiết bị:</strong></td>
                  <td>{product.deviceSupport}</td>
                </tr>
              </tbody>
            </table>

            <p className="modal-desc modal-support-title">Các danh mục phiên bản hỗ trợ</p>
            <table className="product-info-table">
              <tbody>
                <tr>
                  <td><strong>Phiên bản hệ điều hành:</strong></td>
                  <td>{product.osSupport}</td>
                </tr>
                <tr>
                  <td><strong>Phiên bản thiết bị:</strong></td>
                  <td>{product.deviceVersion}</td>
                </tr>
                <tr>
                  <td><strong>Hỗ trợ thanh toán:</strong></td>
                  <td className="payment-icons">
                    <div className="payment-icons">
                      <img src="/assets/iconpayment/binance.png" alt="Binance" />
                      <img src="/assets/iconpayment/paypal.png" alt="PayPal" />
                      <img src="/assets/iconpayment/vietqr.png" alt="VietQR" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="gradient-text1">
                    <strong>Đối với thiết bị iPad bạn sẽ được "Miễn Phí" hoàn toàn</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="modal-bottom-row">
              <div className="modal-price">
                <p><strong>Giá gốc:</strong> <span>{product.salePrice}</span> <s className="highlight">{product.price}</s></p>
              </div>
              <div className="modal-social-icons">
                <a href="https://t.me/CertApple_KT" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/iconpayment/telegram.png" alt="Telegram" />
                </a>
                <a href="https://www.facebook.com/ADKenhTao/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/iconpayment/facebook.png" alt="Facebook" />
                </a>
                <a href="https://zalo.me/g/nhothm102" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/iconpayment/zalo.png" alt="Zalo" />
                </a>
                <a href="https://chat.whatsapp.com/KXqcHO2LZyD54goJtogsSL" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/iconpayment/whatsapp.png" alt="WhatsApp" />
                </a>
                <a href="https://www.youtube.com/@CertP12" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/iconpayment/youtube.png" alt="YouTube" />
                </a>
              </div>
            </div>

            {/* <div className="modal-actions">
              <button className="buy-now">Mua ngay</button>
              <button className="add-to-cart">Thêm vào giỏ</button>
            </div> */}
          </div>

          {/* Ảnh bên phải */}
          <div className="modal-image-container">
            <div className="modal-image-top">
              <img src={product.image} alt={product.title} className="modal-image" />
            </div>
            {/* Thêm PurchaseOptions vào đây */}
            <div className="modal-image-bottom">
              <PurchaseOptions product={product} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
