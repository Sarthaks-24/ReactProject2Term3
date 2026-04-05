import { useEffect, useState } from 'react';
import { productAPI } from '../../../shared/api';
import { toast } from 'react-toastify';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProducts = async () => {
    try {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        productAPI.getAllProducts(100, 0),
        productAPI.getCategories(),
      ]);

      const list = productsRes.data.products || [];
      const categoryList = (categoriesRes.data || [])
        .map((item) => (typeof item === 'string' ? item : item.slug || item.name || ''))
        .filter(Boolean);

      setProducts(list);
      setCategories(['all', ...categoryList]);
      setError('');
    } catch (err) {
      console.error('Failed to load products', err);
      setError('Unable to load products right now.');
      toast.error('Could not load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, categories, loading, error, reload: loadProducts };
};

export default useProducts;
