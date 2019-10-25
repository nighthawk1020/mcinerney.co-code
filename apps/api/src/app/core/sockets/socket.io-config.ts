
let socketServer;

export function configureSocketIo(io) {
  console.log('configured');
  socketServer = io;
}

export function getSocketServer() {
  return socketServer;
}