import {app, BrowserWindow, screen} from 'electron';

app.on('ready', () => {
  console.log('started');
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    show: false
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
