'use client';

import { useEffect } from 'react';
import { getSocket } from '@/lib/socket';

/**
 * Connecte le singleton Socket.io au montage, déconnecte au démontage
 * de la dernière page qui l'utilise. Les pages carte/ et alertes/ appellent
 * ce hook indépendamment ; le compteur de refs évite de couper la
 * connexion tant qu'une des deux est encore montée.
 */
let refs = 0;

export function useSocket() {
  const socket = getSocket();

  useEffect(() => {
    refs += 1;
    if (!socket.connected) socket.connect();

    return () => {
      refs -= 1;
      if (refs <= 0) socket.disconnect();
    };
  }, [socket]);

  return socket;
}
