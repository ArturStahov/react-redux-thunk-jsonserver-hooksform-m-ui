import { createAction } from '@reduxjs/toolkit';

export const getAllTodoRequest = createAction('todo/getAllRequest');
export const getAllTodoSuccess = createAction('todo/getAllSuccess');
export const getAllTodoError = createAction('todo/getAllError');

export const addTodoRequest = createAction('todo/addItemRequest');
export const addTodoSuccess = createAction('todo/addItemSuccess');
export const addTodoError = createAction('todo/addItemError');

export const deleteTodoRequest = createAction('todo/deleteItemRequest');
export const deleteTodoSuccess = createAction('todo/deleteItemSuccess');
export const deleteTodoError = createAction('todo/deleteItemError');

export const editTodoRequest = createAction('todo/editItemRequest');
export const editTodoSuccess = createAction('todo/editItemSuccess');
export const editTodoError = createAction('todo/editItemError');
