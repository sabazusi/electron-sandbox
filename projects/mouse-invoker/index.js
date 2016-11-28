import {app, BrowserWindow, screen, globalShortcut} from 'electron';

app.on('ready', () => {
  const panelWin = new BrowserWindow({
    width: 200,
    height: 50,
    x: 0,
    y: 0,
    show: false
  });
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    show: false
  });

  globalShortcut.register('Control+a', () => {
    panelWin.show();
  });
  globalShortcut.register('Control+s', () => {
    panelWin.hide();
  });

  setInterval(() => {
    const pos = screen.getCursorScreenPoint();
    console.log(screen.getAllDisplays());
    if (pos.y < 10) {
      win.show();
    } else {
      win.hide();
    }
  }, 10);
});
