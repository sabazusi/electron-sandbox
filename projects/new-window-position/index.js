import {app, BrowserWindow, screen, globalShortcut} from 'electron';
import path from 'path';

const windows = [];
const MAX_WINDOW_NUM = 10;
app.on('ready', () => {
  const createWindow = () => {
    if (windows.length < MAX_WINDOW_NUM) {
      const win = new BrowserWindow({
        width: 200,
        height: 200,
        x: windows.length * 100,
        y: windows.length * 50,
        show: true,
        resizable: false,
        movable: true,
        alwaysOnTop: true,
        frame: false
      });
      windows.push(win);
    }
  };

  setInterval(() => createWindow(), 3000);
});
