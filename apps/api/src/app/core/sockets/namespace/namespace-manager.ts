import { getSocketServer } from '../socket.io-config';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const charactersLength = characters.length;

export class NamespaceManager {
  private static _instance;
  private namespaces = {};
  private socketNamespaceMapping = {};
  private socketServer;

  constructor() {
    this.socketServer = getSocketServer();
  }

  static instance() {
    if (!this._instance) {
      this._instance = new NamespaceManager();
    }
    return this._instance;
  }

  generateNamespaceCode(authorizationCode: string): string {
    let result = '';
    while (result === '' || this.namespaces[result]) {
      for(let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    }
    this.socketNamespaceMapping[result] = {sockets: []}
    this.socketServer.of(result)
      .on('connection', (socket) => {
        this.socketNamespaceMapping[result].sockets.push(socket);
      })
      .on('disconnect', (socket) => {
        delete this.socketNamespaceMapping[result].sockets[this.socketNamespaceMapping[result].sockets.findIndex(
          (socketId: string) => socketId === socket.id
        )];
      });
      this.namespaces[result] = authorizationCode;
    return result;
  }

  deleteNamespaces(namespaceCode) {
    delete this.namespaces[namespaceCode];
  }
}

