import { useState, useEffect } from 'react';
import AreaSelector from './components/AreaSelector';
import MapView from './components/MapView';
import SpotList from './components/SpotList';
import type { Prefecture, FishingSpot } from './types';
import { getFishingSpots } from './libs/api';

export default function App() {
    const [selectedPref, setSelectedPref] = useState<Prefecture | null>(null);
    const [spots, setSpots] = useState<FishingSpot[]>([]);
    const [center, setCenter] = useState<[number, number]>([37.7749, 139.2394]); // 全国初期中心

    useEffect(() => {
        const fetchSpots = async () => {
            const data = await getFishingSpots(selectedPref?.id);
            setSpots(data);
            if (selectedPref) setCenter(selectedPref.center);
        };
        fetchSpots();
    }, [selectedPref]);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4 text-xl">釣り場マップ</header>
            <div className="flex flex-1">
                <div className="w-1/3 p-4">
                    <AreaSelector onSelectPrefecture={setSelectedPref} />
                    <SpotList spots={spots} />
                </div>
                <div className="w-2/3 p-4">
                    <MapView center={center} spots={spots} />
                </div>
            </div>
            <footer className="bg-gray-800 text-white p-4 text-center">© 2025 Fishing Map</footer>
        </div>
    );
}
