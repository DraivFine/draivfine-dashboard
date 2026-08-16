'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api/client';
import { clearToken, getToken, setToken } from '@/lib/auth';

interface SessionUtilisateur {
  id: string;
  nom: string;
  email: string;
  role: 'ADMIN' | 'GESTIONNAIRE_FLOTTE';
}

interface LoginResponse {
  accessToken: string;
  utilisateur: SessionUtilisateur;
}

export function useAuth() {
  const router = useRouter();
  const [utilisateur, setUtilisateur] = useState<SessionUtilisateur | null>(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setChargement(false);
      return;
    }
    apiClient
      .get<SessionUtilisateur>('/auth/moi', token)
      .then(setUtilisateur)
      .catch(() => clearToken())
      .finally(() => setChargement(false));
  }, []);

  const connexion = useCallback(
    async (email: string, motDePasse: string) => {
      const { accessToken, utilisateur } = await apiClient.post<LoginResponse>('/auth/login', {
        email,
        motDePasse,
      });
      setToken(accessToken);
      setUtilisateur(utilisateur);
      router.push('/');
    },
    [router],
  );

  const deconnexion = useCallback(() => {
    clearToken();
    setUtilisateur(null);
    router.push('/login');
  }, [router]);

  return { utilisateur, chargement, connexion, deconnexion };
}
