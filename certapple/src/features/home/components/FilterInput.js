import React from 'react';

const FilterInput = ({ filter, onChange }) => (
  <div className="filter-input">
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      value={filter}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FilterInput;
