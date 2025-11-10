import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { FishingSpot } from '../types';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
    center: [number, number];
    spots: FishingSpot[];
}

function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, 10);
    return null;
}

export default function MapView({ center, spots }: MapViewProps) {
    return (
        <MapContainer center={center} zoom={10} style={{ height: '80vh', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ChangeView center={center} />
            {spots.map((spot) => (
                <Marker key={spot.id} position={[spot.lat, spot.lng]}>
                    <Popup>{spot.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
