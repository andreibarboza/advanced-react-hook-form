import axios from 'axios';

export const API = axios.create();
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export type Options = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
  url: string;
};

export type Response = {
  response: any;
  error?: boolean;
};

export const requestAPI = async (options: Options) => {
  await delay(2000);
  try {
    const response = await API(options);

    return { error: false, response };
  } catch (error) {
    return { error: true, response: error };
  }
};
