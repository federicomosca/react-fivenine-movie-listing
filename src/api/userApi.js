import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

export const getProfile = () => {
    const token = localStorage.getItem('token');
    return axios
      .get('http://localhost:3000/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => res.data);
  };
  

export const register = (user) => axios.post(`${API_URL}/register`, user).then(res => res.data);
export const login = (user) => axios.post(`${API_URL}/login`, user).then(res => res.data);
