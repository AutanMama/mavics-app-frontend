import API from './api';

export const getStats = () => API.get('/admin/dashboard/stats');
export const getAllOrders = () => API.get('/admin/orders');
export const updateOrder = (id, status) => API.put(`/admin/orders/${id}`, { status });
export const getUsers = () => API.get('/admin/users');

export const postActions = {
  create: (data) => API.post('/admin/posts', data),
  delete: (id) => API.delete(`/admin/posts/${id}`)
};

export const videoActions = {
  add: (data) => API.post('/admin/videos', data),
  delete: (id) => API.delete(`/admin/videos/${id}`)
};

export const advertActions = {
  create: (data) => API.post('/admin/adverts', data),
  delete: (id) => API.delete(`/admin/adverts/${id}`)
};

export const getAdminMessages = () => API.get('/admin/messages');