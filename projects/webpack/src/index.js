import {app, BrowserWindow} from 'electron';
import path from 'path';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    show: true
  });
  const templatePath = 'file:' + path.resolve(__dirname, '../src', 'index.html');
  win.loadURL(templatePath);
});
