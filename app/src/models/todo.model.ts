export interface ITodo {
  id: number;
  title: string;
  status: 'Done' | 'In Progress';
}

export interface IForm {
  isShowForm: boolean;
  mode: 'create' | 'edit';
  data: ITodo;
}

export interface IShowDeleteDialog {
  isShowDeleteDialog: boolean;
  todoToBeDeleted: ITodo;
}

export interface ITodoState {
  form: IForm;
  todos: ITodo[];
  deleteDialog: IShowDeleteDialog;
}
