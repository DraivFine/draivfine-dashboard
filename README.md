# moto-safety-dashboard

Dashboard web (Next.js) pour les gestionnaires de flotte et les admins de la
plateforme MotoSafe : suivi temps réel, historique de scoring, alertes et
abonnements. Consomme l'API `moto-safety-backend` (NestJS) en REST + WebSocket.

## Démarrage

```bash
npm install
cp .env.local.example .env.local   # ajuster les URLs si besoin
npm run dev
```

L'app tourne sur `http://localhost:3001` (ou le port par défaut de Next si
libre) et attend le backend NestJS sur `NEXT_PUBLIC_API_URL`.

## Structure

- `app/(auth)/` — écran de connexion, layout sans sidebar
- `app/(dashboard)/` — écrans protégés (middleware.ts vérifie le JWT)
- `app/signalement/` — formulaire public, sans authentification
- `lib/api/` — un fichier par ressource backend (conducteurs, trajets, alertes, abonnements)
- `lib/socket.ts` — singleton Socket.io, réutilisé par `carte/` et `alertes/`
- `components/ui/score-ring.tsx` — élément visuel signature (note + niveau de risque)

## À brancher

Plusieurs pages contiennent des données de démonstration en dur, marquées
`// TODO`, à remplacer par des appels aux fonctions de `lib/api/*` une fois
que l'authentification (cookie JWT côté serveur) est en place. Le rendu
cartographique réel (Leaflet/Mapbox) n'est pas encore branché dans
`components/carte/map-live.tsx` — seule la réception des positions en
temps réel via WebSocket est implémentée.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Socket.io-client.
