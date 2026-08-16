import { io, type Socket } from 'socket.io-client';
import { getToken } from './auth';

const WS_URL = process.env.NEXT_PUBLIC_WS_URL ?? 'ws://localhost:3000';

let socket: Socket | null = null;

/**
 * Une seule connexion Socket.io réutilisée pour toute la session dashboard.
 * carte/ et alertes/ (via use-socket / use-alertes-temps-reel) partagent
 * cette même instance plutôt que d'ouvrir une connexion par page — évite
 * de saturer le Gateway NestJS de connexions redondantes.
 */
export function getSocket(): Socket {
  if (!socket) {
    socket = io(WS_URL, {
      auth: { token: getToken() },
      autoConnect: false,
      transports: ['websocket'],
    });
  }
  return socket;
}

export function disconnectSocket() {
  socket?.disconnect();
  socket = null;
}
