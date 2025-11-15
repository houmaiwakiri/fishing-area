import { useState, useEffect } from 'react';
import AreaSelector from './components/AreaSelector';
import MapView from './components/MapView';
import SpotList from './components/SpotList';
import type { Prefecture, FishingSpot } from './types';
import { getFishingSpots } from './libs/api';
import './App.css';

export default function App() {
    const [selectedPref, setSelectedPref] = useState<Prefecture | null>(null);
    const [spots, setSpots] = useState<FishingSpot[]>([]);
    const [center, setCenter] = useState<[number, number]>([37.7749, 139.2394]);

    useEffect(() => {
        const fetchSpots = async () => {
            const data = await getFishingSpots(selectedPref?.id);
            setSpots(data);
            if (selectedPref) setCenter(selectedPref.center);
        };
        fetchSpots();
    }, [selectedPref]);

    return (
        <div className="app-container">
            <header className="app-header">釣り場マップ</header>

            <main className="app-main">
                <div className="map-container">
                    <div className="map-view">
                        <MapView center={center} spots={spots} />
                    </div>
                    <div className="spot-list-wrapper">
                        <h2 className="spot-section-title">釣り場一覧</h2>
                        <SpotList spots={spots} />
                    </div>
                </div>

                <aside className="sidebar">
                    <div className="sidebar-inner">
                        <AreaSelector onSelectPrefecture={setSelectedPref} />
                    </div>
                </aside>
            </main>

            <footer className="app-footer">© 2025 turioke</footer>
        </div>
    );
}
