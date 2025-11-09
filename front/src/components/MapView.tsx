import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getFishingSpots, createFishingSpot, FishingSpot } from "../libs/api";

interface MapViewProps {
    prefectureId: number;
    prefectureName: string;
}

const ClickHandler: React.FC<{ onAddSpot: (lat: number, lng: number) => void }> = ({ onAddSpot }) => {
    useMapEvents({
        click(e) {
            onAddSpot(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
};

export const MapView: React.FC<MapViewProps> = ({ prefectureId, prefectureName }) => {
    const [spots, setSpots] = useState<FishingSpot[]>([]);

    useEffect(() => {
        getFishingSpots(prefectureId).then(setSpots);
    }, [prefectureId]);

    const handleAddSpot = async (lat: number, lng: number) => {
        const name = prompt("釣り場名を入力してください");
        if (!name) return;
        const newSpot = await createFishingSpot({ name, lat, lng, prefecture_id: prefectureId });
        setSpots((prev) => [...prev, newSpot]);
    };

    return (
        <div className="relative h-[80vh] w-full">
            <MapContainer center={[35.6895, 139.6917]} zoom={8} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {spots.map((spot) => (
                    <Marker key={spot.id} position={[spot.lat, spot.lng]}>
                        <Popup>{spot.name}</Popup>
                    </Marker>
                ))}
                <ClickHandler onAddSpot={handleAddSpot} />
            </MapContainer>
            <div className="absolute top-2 left-2 bg-white p-2 shadow rounded">
                <h2 className="font-bold">{prefectureName}</h2>
                <p>クリックで釣り場を追加できます</p>
            </div>
        </div>
    );
};
