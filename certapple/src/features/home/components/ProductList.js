import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { fetchProducts } from '../productAPI';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedType, setSelectedType] = useState('Tất cả');
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const [priceRange, setPriceRange] = useState('Tất cả');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts()
            .then(setProducts)
            .catch((err) => console.error('Lỗi tải sản phẩm:', err));
    }, []);

    const types = ['Tất cả', ...new Set(products.map(p => p.type).filter(Boolean))];
    const categories = ['Tất cả', ...new Set(products.map(p => p.category).filter(Boolean))];
    const priceOptions = ['Tất cả', '0-1000', '1000-2000', '2000+'];

    const applyFilters = (product) => {
        const matchType = selectedType === 'Tất cả' || product.type === selectedType;
        const matchCategory = selectedCategory === 'Tất cả' || product.category === selectedCategory;

        const matchSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase());


        let matchPrice = true;
        if (priceRange !== 'Tất cả') {
            const rawPrice = parseFloat(product.salePrice?.replace(/[^\d]/g, ''));
            if (!isNaN(rawPrice)) {
                if (priceRange === '0-1000') matchPrice = rawPrice <= 1000;
                else if (priceRange === '1000-2000') matchPrice = rawPrice > 1000 && rawPrice <= 2000;
                else if (priceRange === '2000+') matchPrice = rawPrice > 2000;
            }
        }

        return matchType && matchCategory && matchPrice && matchSearch;
    };

    const filtered = products.filter(applyFilters);

    return (
        <section className="product-list-section">
            {/* BỘ LỌC */}
            <div className="filter-group">
                {/* Loại sản phẩm */}
                <div className="filter-inline">
                    {/* <h1 className="filter-label">Lọc theo loại:</h1> */}
                    <div className="filter-buttons">
                        {types.map((type) => (
                            <button
                                key={type}
                                className={selectedType === type ? 'active' : ''}
                                onClick={() => setSelectedType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* NHÓM BỘ LỌC NGANG */}
                <div className="filter-row">
                    {/* Danh mục sản phẩm */}
                    {/* <div className="filter-inline">
                        <h2 className="filter-label">Danh mục:</h2>
                        <div className="filter-buttons">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={selectedCategory === cat ? 'active' : ''}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    {/* Khoảng giá */}
                    <div className="filter-inline">
                        <h2 className="filter-label">Giá:</h2>
                        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                            {priceOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt === 'Tất cả' ? 'Tất cả giá' : opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tìm kiếm */}
                    <div className="filter-inline">
                        <h2 className="filter-label">Tìm kiếm:</h2>
                        <input
                            type="text"
                            placeholder="Tên sản phẩm..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>



            </div>

            {/* DANH SÁCH SẢN PHẨM */}
            <h1 className="feature-heading">Khám phá các tính năng khác</h1>
            <div className="product-grid-wrapper">
                <div className="product-grid">
                    {filtered.map(product => (
                        <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                    ))}
                </div>
            </div>
            {/* MODAL CHI TIẾT */}
            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </section>
    );
};

export default ProductList;
