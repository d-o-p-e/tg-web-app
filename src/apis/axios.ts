import axios from 'axios';
// axios instance
const api = axios.create({
  baseURL:
    import.meta.env.MODE === 'production' ? import.meta.env.VITE_PROD_BASE_URL : import.meta.env.VITE_DEV_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
