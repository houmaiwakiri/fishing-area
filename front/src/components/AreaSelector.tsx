import { useState } from "react";
import type { Region, Prefecture } from "../types";
import rawRegionsData from "../assets/data/regions.json";

interface AreaSelectorProps {
  onSelectPrefecture: (pref: Prefecture) => void;
}

const regionsData = rawRegionsData as Region[];

export default function AreaSelector({ onSelectPrefecture }: AreaSelectorProps) {
  // 各地方の開閉状態を記録
  const [openRegionIds, setOpenRegionIds] = useState<number[]>([]);

  const toggleRegion = (id: number) => {
    setOpenRegionIds((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="area-selector">
      {regionsData.map((region) => {
        const isOpen = openRegionIds.includes(region.id);
        return (
          <div key={region.id} className="region-block">
            <button
              className={`region-title ${isOpen ? "open" : ""}`}
              onClick={() => toggleRegion(region.id)}
            >
              <span>{region.name}</span>
              <span className="region-toggle">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`prefecture-grid-wrapper ${isOpen ? "open" : "collapsed"}`}
            >
              <div className="prefecture-grid">
                {region.prefectures.map((pref) => (
                  <button
                    key={pref.id}
                    className="prefecture-card"
                    onClick={() => onSelectPrefecture(pref)}
                  >
                    {pref.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
