import { ITodo } from '../../models/todo.model';
import { Icon } from '@iconify/react';
type Props = {
  todo: ITodo;
  onEditTodo: (todo: ITodo) => void;
  onDeleteTodo: (todo: ITodo) => void;
};
const TodoItem = ({ todo, onEditTodo, onDeleteTodo }: Props) => {
  const onHandleEdit = () => {
    onEditTodo(todo);
  };

  const onHandleDelete = () => {
    onDeleteTodo(todo);
  };
  return (
    <div
      className="flex items-center justify-between w-full gap-2  p-2"
      style={{
        border: '1px solid gray',
      }}
    >
      <div className='flex flex-col items-start justify-start'>
      <span>{todo.title}</span>
      <span className='text-sm text-gray-500'>Status: {todo.status}</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Icon
          icon="tabler:edit"
          fontSize={24}
          className="cursor-pointer"
          onClick={onHandleEdit}
        />
        <Icon
          icon="material-symbols:delete"
          fontSize={24}
          className="cursor-pointer"
          onClick={onHandleDelete}
        />
      </div>
    </div>
  );
};

export default TodoItem;
