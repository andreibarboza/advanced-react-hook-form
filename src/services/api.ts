
import axios from 'axios';

export const API = axios.create();

export type Options = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
  params?: any;
  url: string;
  headers?: any;
};

export type Response = {
  response: any;
  error?: boolean;
};

export const requestAPI = async (options: Options) => {
  try {
    const response = await API(options);

    return { error: false, response };
  } catch (error) {
    return { error: true, response: error };
  }
};