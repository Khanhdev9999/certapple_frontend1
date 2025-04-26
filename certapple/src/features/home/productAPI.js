export async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:5001/products');
    
    if (!res.ok) {
      // Nếu server trả về lỗi, throw một exception với trạng thái lỗi.
      throw new Error(`Failed to fetch: ${res.status} - ${res.statusText}`);
    }
    
    // Nếu không có lỗi, trả về dữ liệu dưới dạng JSON.
    return res.json();
  } catch (error) {
    // Xử lý lỗi kết nối hoặc các lỗi khác và log thông báo lỗi.
    console.error('Lỗi khi tải sản phẩm:', error);
    throw error;  // Rethrow lỗi để xử lý ở cấp độ cao hơn (ví dụ trong useEffect hoặc component)
  }
}
