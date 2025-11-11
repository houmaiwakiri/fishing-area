import { useState, useEffect } from "react";
import AreaSelector from "./components/AreaSelector";
import MapView from "./components/MapView";
import SpotList from "./components/SpotList";
import type { Prefecture, FishingSpot } from "./types";
import { getFishingSpots } from "./libs/api";
import "./App.css";

export default function App() {
  const [selectedPref, setSelectedPref] = useState<Prefecture | null>(null);
  const [spots, setSpots] = useState<FishingSpot[]>([]);
  const [center, setCenter] = useState<[number, number]>([37.7749, 139.2394]); // 全国中心

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

      <div className="app-main">
        {/* 左：地図 */}
        <section className="map-section">
          <MapView center={center} spots={spots} />
        </section>

        {/* 右：都道府県＆リスト */}
        <aside className="sidebar">
          <div className="sidebar-inner">
            <h2 className="section-title">都道府県選択</h2>
            <AreaSelector onSelectPrefecture={setSelectedPref} />

            <h3 className="section-title mt-4">釣り場一覧</h3>
            <SpotList spots={spots} />
          </div>
        </aside>
      </div>

      <footer className="app-footer">© 2025 Fishing Map</footer>
    </div>
  );
}
