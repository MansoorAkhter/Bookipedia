import axiosInstance from '../utils/axiosInstance';

const apiUrl = 'https://books-list-api.vercel.app/books';

export const fetchBooks = async () => {
  try {
    const response = await axiosInstance.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};
