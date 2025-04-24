import React from 'react';
import './FeatureGrid.css'

const features = [
  {
    id: 1,
    title: 'Thanh toán nhanh và an toàn hơn',
    description: 'Điền đầy đủ thông tin thẻ thanh toán theo cách an toàn hơn.',
    image: '/assets/feature1.png',
  },
  {
    id: 2,
    title: 'Tìm kiếm về mọi thứ bạn thấy trên web',
    description: 'Google Ống kính trong Chrome giúp bạn dễ dàng tìm kiếm.',
    image: '/assets/feature2.png',
  },
  {
    id: 3,
    title: 'Trò chuyện với Gemini trên thanh tìm kiếm',
    description: 'Nhờ có lối tắt mới này trong Chrome, bạn có thể hỏi Gemini.',
    image: '/assets/feature3.png',
  },
  {
    id: 4,
    title: 'Thanh toán nhanh và an toàn hơn',
    description: 'Điền đầy đủ thông tin thẻ thanh toán theo cách an toàn hơn.',
    image: '/assets/feature1.png',
  },
  {
    id: 5,
    title: 'Tìm kiếm về mọi thứ bạn thấy trên web',
    description: 'Google Ống kính trong Chrome giúp bạn dễ dàng tìm kiếm.',
    image: '/assets/feature2.png',
  },
  {
    id: 6,
    title: 'Trò chuyện với Gemini trên thanh tìm kiếm',
    description: 'Nhờ có lối tắt mới này trong Chrome, bạn có thể hỏi Gemini.',
    image: '/assets/feature3.png',
  },
  // Thêm nhiều feature tùy ý...
];

const FeatureGrid = () => {
  return (
    <section className="feature-grid-section">
      <h2 className="feature-title">Khám phá các tính năng khác</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="plus-button">+</button>
          </div>
        ))}
      </div>

      <div className="see-more">
        <button>Xem thêm →</button>
      </div>
    </section>
  );
};

export default FeatureGrid;
