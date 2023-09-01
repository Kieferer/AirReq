const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    frame: true,
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, './dist/air-req/index.html'));
});
