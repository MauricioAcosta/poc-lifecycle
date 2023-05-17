import http from 'http';
import config from '../config';
import app from '../main';

const port: string | number | false = normalizePort(config.PORT);
app.set('port', port);
const server: http.Server | undefined = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: string) {
  const nPort = parseInt(val, 10);
  if (isNaN(nPort)) {
    return val;
  }
  if (nPort >= 0) {
    return nPort;
  }
  return false;
}

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = (server as http.Server).address();
  const bind =
    typeof addr === 'string' ? `pipe ${addr}` : `port ${(addr as any).port}`;
}

export default server;
