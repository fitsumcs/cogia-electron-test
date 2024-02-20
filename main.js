const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron/main');
const TodoService = require('./services/TodoService');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: 'Cogia test app',
    width: 1200,
    height: 800,

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createMainWindow();
});

ipcMain.on('get:all:todo', async (e, opt) => {
  mainWindow.webContents.send('todo:data', TodoService.db);
});

ipcMain.on('submit:todoForm', async (e, opt) => {
  await TodoService.handleAddTodo(opt);
  mainWindow.webContents.send('todo:added', opt);
});

ipcMain.on('edit:todo', async (e, opt) => {
  await TodoService.updateTodo(opt);
  mainWindow.webContents.send('todo:added', TodoService.db);
});

ipcMain.on('delete:todo', async (e, opt) => {
  await TodoService.deleteTodo(opt);
  mainWindow.webContents.send('todo:data', TodoService.db);
});
