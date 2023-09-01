const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, './dist/air-req/index.html'));
});
