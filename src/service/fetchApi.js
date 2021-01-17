import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7777';

export const fetchGetTodo = () => {
  return axios.get('todo/');
};

export const fetchAddItem = item => {
  return axios.post('todo/', item);
};

export const fetchDeleteItem = item => {
  return axios.delete(`todo/${item.id}`);
};

export const fetchEditItem = (id, update) => {
  return axios.patch(`/todo/${id}`, update);
};
