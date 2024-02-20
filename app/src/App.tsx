import Todos from './components/Todos/Todos';
import ManageTodo from './components/ManageTodo/ManageTodo';

function App() {
  /* 
  const onHandleClick = () => {
    const data: ITodo = {
      id: 3,
      title: 'Sent from react',
      status: 'In Progress',
    };
    ipcRenderer.send('submit:todoForm', data);
  };

  const onSubmit = (values: any) => {
    console.log(values);
  }; */

  return (
    <div className="flex items-center justify-center gap-4">
      <Todos />
      <ManageTodo />
    </div>
  );
}

export default App;
