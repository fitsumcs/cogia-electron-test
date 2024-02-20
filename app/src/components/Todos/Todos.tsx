import { useEffect } from 'react';
import { ITodo } from '../../models/todo.model';
import { Icon } from '@iconify/react';
import TodoItem from '../TodoItem/TodoItem';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks';
import { showForm, setTodos, showDeleteDialog } from '../../slices/TodoSlice';

const Todos = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const { todos } = useAppSelector((state) => state.TodoSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ipcRenderer.send('get:all:todo');
  }, []);

  useEffect(() => {
    ipcRenderer.on('todo:data', (event: any, data: any) => {
      dispatch(setTodos(data));
    });
  }, []);

  const onAddTodo = () => {
    dispatch(
      showForm({
        isShowForm: true,
        mode: 'create',
        data: null,
      })
    );
  };

  const onEditTodo = (todo: ITodo) => {
    dispatch(
      showForm({
        isShowForm: true,
        mode: 'edit',
        data: todo,
      })
    );
  };

  const onDeleteTodo = (todo: ITodo) => {
    dispatch(
      showDeleteDialog({
        isShowDeleteDialog: true,
        todoToBeDeleted: todo,
      })
    );
  };
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div
        className="flex items-center justify-between gap-4 w-full"
        style={{
          borderBottom: '1px solid gray',
        }}
      >
        <span>List of Tasks</span>
        <Icon
          icon="material-symbols:add"
          className="cursor-pointer"
          fontSize={32}
          onClick={onAddTodo}
        />
      </div>

      {/**Todo list */}
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
