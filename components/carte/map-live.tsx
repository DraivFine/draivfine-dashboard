'use client';

import { useEffect, useState } from 'react';
import { useSocket } from '@/hooks/use-socket';
import type { PositionLive } from '@/types';

/**
 * Écoute "position.mise_a_jour" émis par le Gateway WebSocket NestJS
 * (un événement par conducteur actif, throttle côté backend).
 * Le rendu carte réel (Leaflet/Mapbox) est à brancher ici — ce composant
 * ne gère que la partie données temps réel, volontairement découplée de
 * la librairie de rendu pour rester libre du choix cartographique.
 */
export function MapLive() {
  const socket = useSocket();
  const [positions, setPositions] = useState<Record<string, PositionLive>>({});

  useEffect(() => {
    function onPosition(position: PositionLive) {
      setPositions((precedent) => ({ ...precedent, [position.conducteurId]: position }));
    }

    socket.on('position.mise_a_jour', onPosition);
    return () => {
      socket.off('position.mise_a_jour', onPosition);
    };
  }, [socket]);

  const liste = Object.values(positions);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-graphite-700 bg-graphite-800">
      {/* TODO: brancher Leaflet ou Mapbox GL ici, en consommant `liste` */}
      <div className="flex h-full items-center justify-center text-sm text-white/30">
        {liste.length === 0
          ? 'En attente de positions en direct…'
          : `${liste.length} conducteur(s) actif(s) — rendu carte à brancher`}
      </div>

      <div className="absolute bottom-4 left-4 space-y-1">
        {liste.slice(0, 5).map((p) => (
          <div
            key={p.conducteurId}
            className="rounded-lg bg-graphite-900/90 px-3 py-1.5 text-xs text-white/70 backdrop-blur"
          >
            {p.conducteurNom} — {p.vitesse.toFixed(0)} km/h
          </div>
        ))}
      </div>
    </div>
  );
}
