import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user?.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export const fetchPosts = () => API.get('/admin/posts');
export const fetchVideos = () => API.get('/admin/videos');
export const createOrder = (data) => API.post('/orders', data);
export const sendContact = (data) => API.post('/contact', data);
export const initPayment = (amount) => API.post('/payments/initialize', { amount });
export const verifyPayment = (ref) => API.get(`/payments/verify/${ref}`);
export const fetchAdverts = () => API.get('/admin/adverts');

export default API;