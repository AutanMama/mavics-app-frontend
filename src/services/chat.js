import API from './api';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:5000', { autoConnect: false });

export const getChatHistory = () => API.get('/chat/history');