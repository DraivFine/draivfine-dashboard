import { Topbar } from '@/components/layout/topbar';
import { MapLive } from '@/components/carte/map-live';

export default function CartePage() {
  return (
    <div className="flex h-screen flex-col">
      <Topbar titre="Carte en direct" />
      <div className="flex-1 p-6">
        <MapLive />
      </div>
    </div>
  );
}
