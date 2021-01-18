import * as action from './todos-actions';
import {
  fetchGetTodo,
  fetchAddItem,
  fetchDeleteItem,
  fetchEditItem,
} from '../../service/fetchApi';

export const getAllItem = () => async dispatch => {
  dispatch(action.getAllTodoRequest());
  try {
    const response = await fetchGetTodo();
    const { data } = response.data;
    dispatch(action.getAllTodoSuccess(data));
  } catch (error) {
    dispatch(action.getAllTodoError(error));
  }
};

export const addItem = item => async dispatch => {
  dispatch(action.addTodoRequest());
  try {
    const { data } = await fetchAddItem(item);
    dispatch(action.addTodoSuccess(data));
  } catch (error) {
    dispatch(action.addTodoError(error));
  }
};

export const deleteItem = item => async dispatch => {
  dispatch(action.deleteTodoRequest());
  try {
    const response = await fetchDeleteItem(item);
    dispatch(action.deleteTodoSuccess(item));
  } catch (error) {
    dispatch(action.deleteTodoError(error));
  }
};

export const editItem = item => async dispatch => {
  const { first_name, last_name, email, id } = item;
  const update = {
    first_name,
    last_name,
    email,
    id,
  };

  dispatch(action.editTodoRequest());
  try {
    const response = await fetchEditItem(id, update);
    const { data } = response;
    dispatch(action.editTodoSuccess(data));
  } catch (error) {
    dispatch(action.editTodoError(error));
  }
};
