// helper to call backend API; the frontend will default to http://localhost:5000
import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/api' });
export default API;
