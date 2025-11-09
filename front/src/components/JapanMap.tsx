import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Spot {
    id: number;
    name: string;
    lat: number;
    lng: number;
}

// ズーム階層に応じた中心座標
const levels = {
    country: { center: [36.2048, 138.2529], zoom: 5 },
    region: { center: [36.0, 138.0], zoom: 6 },
    prefecture: { center: [35.6895, 139.6917], zoom: 8 },
};

const spots: Spot[] = [
    { id: 1, name: "湘南海岸", lat: 35.308, lng: 139.481 },
    { id: 2, name: "若狭湾", lat: 35.583, lng: 135.383 },
    { id: 3, name: "鹿児島湾", lat: 31.6, lng: 130.6 },
];

const ChangeView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
};

export const JapanMap: React.FC = () => {
    const [level, setLevel] = useState<keyof typeof levels>("country");

    return (
        <div className="flex h-screen">
            <MapContainer center={levels[level].center} zoom={levels[level].zoom} style={{ height: "calc(100vh - 100px)", width: "80%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {spots.map((s) => (
                    <Marker key={s.id} position={[s.lat, s.lng]}>
                        <Popup>{s.name}</Popup>
                    </Marker>
                ))}
                <ChangeView center={levels[level].center} zoom={levels[level].zoom} />
            </MapContainer>
            <aside className="w-80 bg-white shadow-md p-4 overflow-y-auto">
                <h2 className="font-bold text-lg mb-4">ズーム切替</h2>
                <button className="mb-2 p-2 bg-blue-500 text-white w-full" onClick={() => setLevel("country")}>全国</button>
                <button className="mb-2 p-2 bg-blue-500 text-white w-full" onClick={() => setLevel("region")}>地方</button>
                <button className="mb-2 p-2 bg-blue-500 text-white w-full" onClick={() => setLevel("prefecture")}>都道府県</button>

                <h2 className="font-bold text-lg mt-4 mb-2">釣り場一覧</h2>
                <ul>
                    {spots.map((s) => (
                        <li key={s.id} className="text-blue-600 cursor-pointer hover:underline">{s.name}</li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};
