import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2000/',
});

// eslint-disable-next-line
export const getResponse = (ean: string) => {
  return api.get(`books/${ean}`);
};
