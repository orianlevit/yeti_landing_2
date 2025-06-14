import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect() {
    if (!this.socket) {
      this.socket = io(SOCKET_URL);
      
      this.socket.on('action', (payload) => {
        this.handleAction(payload);
      });
    }
    return this.socket;
  }

  handleAction(payload) {
    const { type, data } = payload;
    const listeners = this.listeners.get(type) || [];
    listeners.forEach(callback => callback(data));
  }

  addActionListener(actionType, callback) {
    if (!this.listeners.has(actionType)) {
      this.listeners.set(actionType, []);
    }
    this.listeners.get(actionType).push(callback);
  }

  removeActionListener(actionType, callback) {
    if (this.listeners.has(actionType)) {
      const listeners = this.listeners.get(actionType);
      const index = listeners.indexOf(callback);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export const socketService = new SocketService();
export default socketService; 