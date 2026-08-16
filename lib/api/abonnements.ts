import { apiClient } from './client';
import type { Abonnement } from '@/types';

export const abonnementsApi = {
  liste: (token: string) => apiClient.get<Abonnement[]>('/abonnements', token),
  detail: (id: string, token: string) => apiClient.get<Abonnement>(`/abonnements/${id}`, token),
};
