import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [links, setLinks] = useState({});
  const [meta, setMeta] = useState({
    currentPage: 1,
    limit: 10,
    totalPages: 1,
    totalItems: 1,
    search: '',
  });
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?limit=10&page=${meta?.currentPage}&search=${search}`, {
        cache: 'no-store',
      });
      const json = await response.json();
      setProducts(json?.data);
      setLinks(json?.links);
      setMeta(json?.meta);
    };

    fetchProducts();
  }, [meta?.currentPage]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?limit=10&page=1&search=${search}`, {
        cache: 'no-store',
      });
      const json = await response.json();
      setProducts(json?.data);
      setLinks(json?.links);
      setMeta(json?.meta);
    };

    fetchProducts();
  }, [search]);
  
  return { products, links, meta, setMeta, setSearch };
}

export default useProducts;