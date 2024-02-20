const db = [
  {
    id: 1,
    title: 'Completed Cogia Test app',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Publish to github and send the link',
    status: 'In Progress',
  },
];

const handleAddTodo = async (todo) => {
  db.push({ ...todo, id: db.length + 1 });
};

const updateTodo = (id, todo) => {
  const selectedTodo = db.filter((d) => d.id === id);
  const newDB = [
    ...db,
    { ...selectedTodo, title: todo.title, status: todo.status },
  ];
  db = newDB;
};

const deleteTodo = async (todo) => {
  const indexToBeRemoved = db.findIndex((d) => d.id === todo.id);
  db.splice(indexToBeRemoved, 1);
};

module.exports = { handleAddTodo, updateTodo, deleteTodo, db };
