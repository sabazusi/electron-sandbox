import {app, BrowserWindow, screen, globalShortcut} from 'electron';
import path from 'path';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    show: false,
    resizable: false,
    movable: true,
    alwaysOnTop: true,
    frame: false
  });

  win.loadURL(`file://${path.resolve(__dirname, '../')}/window.html`);
  setTimeout(() => {
    win.show();
  }, 500);
});
