'use client';

import { useEffect, useState } from 'react';
import { useSocket } from './use-socket';
import type { Alerte } from '@/types';

/**
 * Écoute l'événement "alerte.nouvelle" émis par le Gateway NestJS
 * (module alertes) et fait remonter les nouvelles alertes en tête de liste
 * au fil de l'eau, en plus de la liste initiale chargée via alertesApi.liste.
 */
export function useAlertesTempsReel(alertesInitiales: Alerte[]) {
  const socket = useSocket();
  const [alertes, setAlertes] = useState(alertesInitiales);

  useEffect(() => {
    function onNouvelleAlerte(alerte: Alerte) {
      setAlertes((precedent) => [alerte, ...precedent]);
    }

    socket.on('alerte.nouvelle', onNouvelleAlerte);
    return () => {
      socket.off('alerte.nouvelle', onNouvelleAlerte);
    };
  }, [socket]);

  return alertes;
}
