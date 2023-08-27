import axios from 'axios';

const apiKey = '#b0@6hX8YasCq6^unOaPw1tqR';

const instance = axios.create({
  baseURL: 'https://books-list-api.vercel.app',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  },
});

export default instance;
