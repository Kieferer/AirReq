const { app, BrowserWindow, globalShortcut  } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  globalShortcut.register("CmdOrCtrl+Shift+C", () => {
    mainWindow.webContents.openDevTools();
  })

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.join(__dirname, './dist/air-req/index.html'));

  app.on('will-quit', () => {
    globalShortcut.unregisterAll();
  });
});
