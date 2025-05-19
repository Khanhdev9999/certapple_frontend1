import React, { useState } from 'react';

import './ProductModal.css';
import ProductActionButton from './ProductActionButton';


const ProductModal = ({ product, onClose }) => {
  const [step, setStep] = useState(null);

  if (!product) return null;

  return (
    <div className="product-modal" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          {/* BÊN TRÁI */}
          <div className="modal-text">
            <div className="label">PayPal hoặc USDT : {product.description}</div>
            <h3>Gói chứng chỉ: {product.title}</h3>
            <p>{product.content}</p>

            <h4 className="modal-desc modal-support-title">Thông tin sản phẩm:</h4>
            <ol>
              <li>
                Thời hạn: <strong>{product.usageDuration}</strong>
              </li>
              <li>
                Bảo hành: <strong>{product.warrantyTime}</strong>
              </li>
              <li>
                File chứng chỉ: <strong>{product.fileType}</strong>
              </li>
              <li>Đổi thiết bị: <strong>{product.deviceSupport}</strong></li>
            </ol>

            <h4 className="modal-desc modal-support-title">Các danh mục phiên bản hỗ trợ</h4>
            <ol>
              <li>Phiên bản hệ điều hành: <strong>{product.osSupport}</strong></li>
              <li>Phiên bản thiết bị: <strong>{product.deviceVersion}</strong></li>
              <li>Hỗ trợ thanh toán:
                {/* <div className="payment-icons">
              <div className="payment-icons">
                <img src="/assets/iconpayment/binance.png" alt="Binance" />
                <img src="/assets/iconpayment/paypal.png" alt="PayPal" />
                <img src="/assets/iconpayment/vietqr.png" alt="VietQR" />
              </div>
            </div> */}
              </li>
            </ol>
            <div className="modal-bottom-row">
              <div className="modal-price">
                <p> Giá: <span classname="highlight1">{product.salePrice}</span> <s className="highlight">{product.price}</s></p>
              </div>
              {/* <div className="modal-social-icons">
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
          </div> */}
            </div>

          </div>

          {/* BÊN PHẢI */}
          <div className="modal-side-content">
            <button className="modal-close" onClick={onClose}>×</button>
            <div className="modal-side-wrapper scrollable-content">
              <div className="modal-image-container">
                <img src={product.image} alt={product.title} className="modal-image" />
              </div>

              {step === null && (
  <div className="modal-next-step">
    <h4 style={{ color: 'darkorange' }}>MUA THỦ CÔNG BẰNG UDID</h4>
    <div className="input-container">
      <div className="inputs-wrapper">
        <input type="text" placeholder="Điền UDID thiết bị" className="udid-input" />
        {/* <input type="text" placeholder="-- Vui lòng chọn thiết bị --" className="udid-input" /> */}
      </div>
      <button className="btn orange">TẠO ĐƠN</button>
    </div>
    <label>
      <input type="checkbox" /> Tôi cam kết đã kiểm tra UDID kỹ trước khi tiếp tục
    </label>
  </div>
)}

              {step === 'current' && (
                <div className="modal-next-step">
                  <h4 style={{ color: 'blue' }}>MUA CHO THIẾT BỊ NÀY</h4>
                  <img src="" alt="QR Code current device" className="qr-image" />
                  <p className="qr-note">Vui lòng quét mã bằng iPhone hoặc iPad của bạn</p>
                  <button className="btn orange" onClick={() => setStep(null)}>Mua Thủ Công</button>
                </div>
              )}

              {step === 'other' && (
                <div className="modal-next-step">
                  <h4 style={{ color: 'green' }}>MUA CHO THIẾT BỊ KHÁC</h4>
                  <p style={{ color: 'red' }}>Vui lòng chỉ sử dụng thiết bị khác hoặc Safari để lấy UDID</p>
                  <div className="copy-link-box">
                    <input
                      type="text"
                      value="https://h5m4.c19.e2-1.dev/image-video/mobile-configs/24ae90cf-2f23-43b9-871f-4b357a082dfa.mobileconfig"
                      readOnly
                    />
                    <button className="btn blue">COPY LINK</button>
                  </div>
                  <img src="" alt="QR Code other device" className="qr-image" />
                  <button className="btn orange" onClick={() => setStep(null)}>Mua Thủ Công</button>
                </div>
              )}

              <div className="modal-buttons buttons-default" style={{ marginTop: '10px' }}>
                <ProductActionButton onClick={() => setStep('current')}>
                  MUA CHO THIẾT BỊ NÀY
                </ProductActionButton>
                <ProductActionButton color="green" onClick={() => setStep('other')}>
                  MUA CHO THIẾT BỊ KHÁC
                </ProductActionButton>
              </div>



            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductModal;
