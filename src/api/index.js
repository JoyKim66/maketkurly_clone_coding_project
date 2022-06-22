import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5001',
    // baseURL: '15.165.160.84'
});
// api.defaults.headers.common['Content-Type'] = "application/json";

export const apis = {

	// product
	productList: () => api.get('/products'),	
	// productDetail: (productId) => api.get(`/products/${productId}`),
    productDetail: () => api.get(`/products`),
    // productList: () => api.get('/api/products'),
    // productDetail: (product_id) => api.get(`/api/products/${product_id}`),
    // `http://3.38.153.67/api/products?productId=${pid}`,
};