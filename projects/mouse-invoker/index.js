import {app, screen} from 'electron';

app.on('ready', () => {
  console.log('started');
  setInterval(() => {
    console.log(screen.getCursorScreenPoint());
  }, 10);
});
