import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getMovies = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getMovie = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const addMovie = async (movie) => {
  const res = await axios.post(API_URL, movie);
  return res.data;
};

export const updateMovie = async (id, movie) => {
  const res = await axios.put(`${API_URL}/${id}`, movie);
  return res.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
