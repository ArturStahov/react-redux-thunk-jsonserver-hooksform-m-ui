import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './todos-actions';

const todoReducer = createReducer([], {
  [action.getAllTodoSuccess]: (_, { payload }) => payload,
  [action.addTodoSuccess]: (state, { payload }) => [...state, payload],
  [action.deleteTodoSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
  [action.editTodoSuccess]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
});

const loaderReducer = createReducer(false, {
  [action.getAllTodoRequest]: () => true,
  [action.getAllTodoSuccess]: () => false,
  [action.getAllTodoError]: () => false,
  [action.addTodoRequest]: () => true,
  [action.addTodoSuccess]: () => false,
  [action.addTodoError]: () => false,
  [action.deleteTodoRequest]: () => true,
  [action.deleteTodoSuccess]: () => false,
  [action.deleteTodoError]: () => false,
  [action.editTodoRequest]: () => true,
  [action.editTodoSuccess]: () => false,
  [action.editTodoError]: () => false,
});

const errorReducer = createReducer(null, {
  [action.getAllTodoError]: (_, { payload }) => payload,
  [action.addTodoError]: (_, { payload }) => payload,
  [action.deleteTodoError]: (_, { payload }) => payload,
  [action.editTodoError]: (_, { payload }) => payload,
});

const todoRootReducer = combineReducers({
  items: todoReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export { todoRootReducer };
