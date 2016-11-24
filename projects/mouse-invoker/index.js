import {app, screen} from 'electron';

app.on('ready', () => {
  console.log('started');
  setInterval(() => {
    const pos = screen.getCursorScreenPoint();
    console.log(screen.getAllDisplays());
    if (pos.y === 0) console.log('On TOP');
  }, 10);
});
