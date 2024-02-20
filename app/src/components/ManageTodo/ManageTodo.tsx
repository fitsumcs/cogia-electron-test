import { useEffect, useState } from 'react';
import { ITodo } from '../../models/todo.model';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks';
import TodoForm from './TodoForm/TodoForm';
import { addNewTodo } from '../../slices/TodoSlice';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const ManageTodo = () => {
  const ipcRenderer = (window as any).ipcRenderer;

  const dispatch = useAppDispatch();
  const { isShowForm, mode, data } = useAppSelector(
    (state) => state.TodoSlice.form
  );
  const { isShowDeleteDialog } = useAppSelector(
    (state) => state.TodoSlice.deleteDialog
  );

  useEffect(() => {
    ipcRenderer.on('todo:added', (event: any, opt: any) => {
      dispatch(addNewTodo(opt));
    });
  }, []);

  const onSubmit = (values: ITodo) => {
    if (mode === 'edit') {
      ipcRenderer.send('edit:todo', values);
    } else {
      ipcRenderer.send('submit:todoForm', values);
    }
  };
  return (
    <div>
      {isShowForm && !isShowDeleteDialog && (
        <TodoForm mode={mode} data={data} onSubmit={onSubmit} />
      )}

      {!isShowForm && isShowDeleteDialog && <ConfirmDialog />}
    </div>
  );
};

export default ManageTodo;
