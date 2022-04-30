import _axios from 'axios';
import Router from 'next/router';

import { logout } from '@/store/auth/authSlice';

import store from '../store';

export type ServerError = {
  statusCode: number;
  message: string;
  timestamp: string;
  path: string;
};

const axios = _axios.create({ baseURL: '/api' });

axios.interceptors.request.use((config) => {
  const { accessToken } = store.getState().auth;

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      const errorObject: ServerError = response.data;
      const code = errorObject.statusCode;

      if (code === 401 || code === 404) {
        store.dispatch(logout());
        Router.push('/');
      }

      throw errorObject;
    }

    throw error;
  }
);

export default axios;
