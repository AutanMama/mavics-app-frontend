import API from './api';

export const loginUser = async (credentials) => {
  const { data } = await API.post('/auth/login', credentials);
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const registerUser = async (userData) => {
  const { data } = await API.post('/auth/register', userData);
  localStorage.setItem('userInfo', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('userInfo');
  window.location.href = '/login';
};