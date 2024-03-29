import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

axiosInstance.interceptors.request.use(async function (config) {
  const session = await getSession();

  config.headers.Authorization = session
    ? `Bearer ${session?.user.accessToken}`
    : '';
  return config;
});

export default axiosInstance;
