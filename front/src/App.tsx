import { useState, useEffect } from 'react';
import './App.css';
import type { Prefecture, FishingSpot, MovePayload } from './types';
import { getFishingSpots } from './libs/api';
import AreaSelector from './components/AreaSelector';
import MapView from './components/MapView';
import SpotList from './components/SpotList';
import SpotDetail from './components/SpotDetail';

export default function App() {
    const JAPAN: [number, number] = [38.5, 138];
    const JAPAN_ZOOM = 5;

    const [selectedPref, setSelectedPref] = useState<Prefecture | null>(null);
    const [spots, setSpots] = useState<FishingSpot[]>([]);
    const [center, setCenter] = useState<[number, number]>(JAPAN);
    const [zoom, setZoom] = useState<number>(JAPAN_ZOOM);
    const [selectedSpot, setSelectedSpot] = useState<FishingSpot | null>(null);

    useEffect(() => {
        const fetchSpots = async () => {
            const data = await getFishingSpots(selectedPref?.id);
            setSpots(data);
            if (selectedPref) {
                setCenter(selectedPref.center);
                setZoom(9);
            } else {
                setCenter(JAPAN);
                setZoom(JAPAN_ZOOM);
            }
        };
        fetchSpots();
    }, [selectedPref]);

    const handleMove = ({ center, zoom }: MovePayload) => {
        setCenter(center);
        setZoom(zoom);
    };

    return (
        <div className="app-container">
            <header className="app-header">つりおけまっぷ</header>

            <main className="app-main">
                <div className="map-container">
                    <div className="map-view">
                        <MapView
                            center={center}
                            zoom={zoom}
                            spots={spots}
                        />
                    </div>

                    <div className="spot-list-wrapper">
                        <h2 className="spot-section-title">釣り場一覧</h2>
                        <SpotList
                            spots={spots}
                            onMove={handleMove}
                            onDetail={(spot) => {
                                setSelectedSpot(spot);
                            }}
                        />

                        <SpotDetail
                            spot={selectedSpot}
                            onClose={() => setSelectedSpot(null)}
                        />
                    </div>
                </div>

                <aside className="sidebar">
                    <div className="sidebar-inner">
                        <AreaSelector
                            onSelectPrefecture={(p) => setSelectedPref(p)}
                            onMove={handleMove}
                        />
                    </div>
                </aside>
            </main>

            <footer className="app-footer">© 2025 turioke map</footer>
        </div>
    );
}
