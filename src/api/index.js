import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5001',
    baseURL: 'http://15.165.160.84'
});
// api.defaults.headers.common['Content-Type'] = "application/json";

export const apis = {

	// product
    productList: () => api.get(`/api/products`),
    productDetail: (productId) => api.get(`/api/products/${productId}/index/1`)
};