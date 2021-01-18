import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in/api'; // https://reqres.in/api/users?page=2&per_page=4
axios.defaults.params = {
  per_page: 4,
};

export const fetchGetTodo = () => {
  return axios.get('/users?page=1');
};

export const fetchAddItem = item => {
  return axios.post('/users', item);
};

export const fetchDeleteItem = item => {
  return axios.delete(`/users/${item.id}`);
};

export const fetchEditItem = (id, update) => {
  return axios.patch(`/users/${id}`, update);
};
