import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/users';

export const getProfile = () => {
  const token = localStorage.getItem('token');
  return axios
    .get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => res.data);
};

export const register = (user) => axios.post(`${API_URL}/register`, user).then(res => res.data);
export const login = (user) => axios.post(`${API_URL}/login`, user).then(res => res.data);
