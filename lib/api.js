// lib/api.js - Frontend API Configuration
import axios from 'axios';

// API Base Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log request in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        }

        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => {
        // Log response in development
        if (process.env.NODE_ENV === 'development') {
            console.log(`✅ API Response: ${response.status} ${response.config.url}`);
        }
        return response;
    },
    (error) => {
        // Handle common errors
        if (error.response) {
            const { status, data } = error.response;

            switch (status) {
                case 401:
                    // Unauthorized - redirect to login
                    localStorage.removeItem('authToken');
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Access forbidden:', data.message);
                    break;
                case 404:
                    console.error('Resource not found:', data.message);
                    break;
                case 500:
                    console.error('Server error:', data.message);
                    break;
                default:
                    console.error('API Error:', data.message || error.message);
            }
        } else if (error.request) {
            console.error('Network Error:', error.message);
        } else {
            console.error('Request Setup Error:', error.message);
        }

        return Promise.reject(error);
    }
);

// API Methods
export const apiClient = {
    // Auth
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout'),
    refreshToken: () => api.post('/auth/refresh'),

    // Products
    getProducts: (params) => api.get('/products', { params }),
    getProduct: (id) => api.get(`/products/${id}`),
    createProduct: (productData) => api.post('/products', productData),
    updateProduct: (id, productData) => api.put(`/products/${id}`, productData),
    deleteProduct: (id) => api.delete(`/products/${id}`),

    // Categories
    getCategories: () => api.get('/categories'),
    getCategory: (id) => api.get(`/categories/${id}`),
    createCategory: (categoryData) => api.post('/categories', categoryData),
    updateCategory: (id, categoryData) => api.put(`/categories/${id}`, categoryData),
    deleteCategory: (id) => api.delete(`/categories/${id}`),

    // Cart
    getCart: () => api.get('/cart'),
    addToCart: (productId, quantity) => api.post('/cart/add', { productId, quantity }),
    updateCartItem: (itemId, quantity) => api.put(`/cart/items/${itemId}`, { quantity }),
    removeFromCart: (itemId) => api.delete(`/cart/items/${itemId}`),
    clearCart: () => api.delete('/cart'),

    // Orders
    getOrders: () => api.get('/orders'),
    getOrder: (id) => api.get(`/orders/${id}`),
    createOrder: (orderData) => api.post('/orders', orderData),
    updateOrderStatus: (id, status) => api.patch(`/orders/${id}/status`, { status }),

    // Users
    getProfile: () => api.get('/users/profile'),
    updateProfile: (userData) => api.put('/users/profile', userData),
    getUsers: () => api.get('/users'),
    getUser: (id) => api.get(`/users/${id}`),
};

// Helper function to handle API errors
export const handleApiError = (error) => {
    if (error.response) {
        return {
            message: error.response.data.message || 'An error occurred',
            status: error.response.status,
            data: error.response.data
        };
    } else if (error.request) {
        return {
            message: 'Network error - please check your connection',
            status: 0,
            data: null
        };
    } else {
        return {
            message: error.message || 'An unexpected error occurred',
            status: 0,
            data: null
        };
    }
};

export default api;