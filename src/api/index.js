import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5001',
    baseURL: 'http://15.165.160.84'
});
// api.defaults.headers.common['Content-Type'] = "application/json";

export const apis = {

	// product
	// productDetail: (productId) => api.get(`/products/${productId}`),
    productList: () => api.get(`/api/products`),
    productDetail: (productId) => api.get(`/api/products/${productId}/index/1`)
    // productDetail: (product_id) => api.get(`/api/products/${product_id}`),
    // `http://3.38.153.67/api/products?productId=${pid}`,
};