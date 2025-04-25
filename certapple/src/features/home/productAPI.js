export async function fetchProducts() {
    const res = await fetch('http://localhost:3001/products');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  }
  

  