import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products', {
        cache: 'no-store',
      });
      const json = await response.json();
      setProducts(json?.data);
    };

    fetchProducts();
  }, []);

  return products;
}

export default useProducts;