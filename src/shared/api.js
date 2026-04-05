import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAPI = {
  getAllProducts: (limit = 100, skip = 0) => api.get(`/products?limit=${limit}&skip=${skip}`),
  getCategories: () => api.get('/products/categories'),
  getProductById: (id) => api.get(`/products/${id}`),
};

export default api;
