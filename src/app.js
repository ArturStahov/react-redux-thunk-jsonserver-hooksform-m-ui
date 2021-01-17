import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllItem } from './redux/todos/todos-operation';
import { Spinner } from './components/Spinner';
import { isLoadingValue } from './components/Spinner';
import { ToDoList } from './components/TodoList';
import { ToDoCreateForm } from './components/TodoCreateForm';

export default function App() {
  let isLoading = useSelector(isLoadingValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItem());
  }, []);

  return (
    <>
      <ToDoCreateForm />
      <ToDoList />
      {isLoading && <Spinner />}
    </>
  );
}
