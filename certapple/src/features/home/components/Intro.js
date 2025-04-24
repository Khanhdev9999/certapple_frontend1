// src/features/home/components/Intro.jsx
import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section id="hero" className="hero">
      <div 
        className="heroWrapper" 
        style={{ backgroundImage: `url("/assets/intro/background.png")` }}
      >
        <h1 className="heading">CERTAPPLE.COM</h1>

        <div className="qrBox">
          <img 
            src="/assets/intro/logo2.png" 
            alt="QR Tải Chrome" 
            className="qrImage" 
          />
          <p className="qrText">Tải CERTAPPLE về điện thoại</p>
        </div>
      </div>

      <div className="certappleLogoBox">
        <img 
          className="certappleLogoImage" 
          src="/assets/intro/logo2.png" 
          alt="CertApple Logo" 
        />
        <div className="certappleLogoCircle"></div>
      </div>
    </section>
  );
};

export default Intro;
