import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import type { FishingSpot } from '../types';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
    center: [number, number];
    zoom: number;
    spots: FishingSpot[];
    onSelectSpot: (spot: FishingSpot) => void;
}

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [map, center, zoom]);

    return null;
}

export default function MapView({ center, zoom, spots, onSelectSpot }: MapViewProps) {
    return (
        <MapContainer center={center} zoom={zoom} className="leaflet-map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ChangeView center={center} zoom={zoom} />

            {spots.map((spot) => (
                <Marker
                    key={spot.id}
                    position={[spot.lat, spot.lng]}
                    eventHandlers={{
                        click: () => {
                            onSelectSpot(spot);
                        },
                    }}
                >
                </Marker>
            ))}
        </MapContainer>
    );
}
