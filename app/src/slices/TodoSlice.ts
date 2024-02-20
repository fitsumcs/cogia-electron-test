import { createSlice } from '@reduxjs/toolkit';
import { ITodoState } from '../models/todo.model';

const initialState: ITodoState = {
  form: {
    isShowForm: false,
    mode: 'create',
    data: {
      id: 0,
      title: '',
      status: 'In Progress',
    },
  },
  todos: [],
  deleteDialog: {
    isShowDeleteDialog: false,
    todoToBeDeleted: {
      id: 0,
      title: '',
      status: 'In Progress',
    },
  },
};

const TodoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.form = action.payload;
    },
    addNewTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },

    showDeleteDialog: (state, action) => {
      state.deleteDialog = action.payload;
    },
  },
});

export const { showForm, setTodos, addNewTodo, showDeleteDialog } =
  TodoSlice.actions;
export default TodoSlice.reducer;
