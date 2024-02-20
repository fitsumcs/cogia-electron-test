import { Button } from 'antd';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/redux-hooks/redux-hooks';
import { showDeleteDialog } from '../../slices/TodoSlice';

const ConfirmDialog = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const { todoToBeDeleted } = useAppSelector(
    (state) => state.TodoSlice.deleteDialog
  );
  const dispatch = useAppDispatch();

  const onHandleDelete = () => {
    ipcRenderer.send('delete:todo', todoToBeDeleted);
  };
  const onHandleCancel = () => {
    dispatch(
      showDeleteDialog({
        isShowDeleteDialog: false,
        todoToBeDeleted: null,
      })
    );
  };
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <span>Are you sure you want to delete this task</span>
      <div className="flex items-center justify-between gap-4">
        <Button
          onClick={onHandleDelete}
          type="primary"
          color="primary"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Yes, I'm sure
        </Button>

        <Button
          onClick={onHandleCancel}
          type="primary"
          color="primary"
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          No, I'm now
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDialog;
