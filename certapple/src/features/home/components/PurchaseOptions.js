import React, { useState } from 'react';
import './PurchaseOptions.css';

const PurchaseOptions = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="purchase-options">
      <nav className="sliding-nav">
        <button 
          className={`sliding-nav-item ${selectedOption === 'device' ? 'active' : ''}`} 
          onClick={() => handleSelectOption('device')}
        >
          Mua cho thiết bị này
        </button>
        <button 
          className={`sliding-nav-item ${selectedOption === 'otherDevice' ? 'active' : ''}`} 
          onClick={() => handleSelectOption('otherDevice')}
        >
          Mua cho thiết bị khác
        </button>
        <button 
          className={`sliding-nav-item ${selectedOption === 'manual' ? 'active' : ''}`} 
          onClick={() => handleSelectOption('manual')}
        >
          Mua thủ công
        </button>
      </nav>

      <div className="selected-option">
        {selectedOption === 'device' && (
          <div className="device-option">
          <img src="/assets/purchaseoptions/qr-current.png" alt="QR Code" className="qr-code" />
          <p className="qr-text">Vui lòng quét mã bằng iPhone hoặc iPad của bạn</p>
        </div>
        )}
        {selectedOption === 'otherDevice' && (
          <div className="other-device-option">
            <p>Hướng dẫn mua cho thiết bị khác.</p>
            {/* Thêm giao diện tùy chỉnh cho "Mua cho thiết bị khác" */}
          </div>
        )}
        {selectedOption === 'manual' && (
          <div className="manual-option">
            <p>Hướng dẫn mua thủ công.</p>
            {/* Thêm giao diện tùy chỉnh cho "Mua thủ công" */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchaseOptions;
