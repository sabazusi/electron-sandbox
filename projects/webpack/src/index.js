import {app, BrowserWindow} from 'electron';

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    show: true
  });
  win.loadURL('../src/index.html');
});
