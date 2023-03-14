import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

// By default retrieve response.data
apiClient.interceptors.response.use(res => res.data);

export default apiClient;
