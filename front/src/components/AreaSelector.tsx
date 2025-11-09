import React, { useState } from "react";
import regionsData from "../assets/data/regions.json";
import { MapView } from "./MapView";

interface Prefecture {
    id: number;
    name: string;
}

interface Region {
    id: number;
    name: string;
    prefectures: Prefecture[];
}

export const AreaSelector: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
    const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture | null>(null);
    const regions: Region[] = regionsData;

    if (!selectedRegion) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-6">全国から選ぶ</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            className="p-6 bg-blue-100 hover:bg-blue-300 rounded-lg font-semibold"
                            onClick={() => setSelectedRegion(region)}
                        >
                            {region.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (!selectedPrefecture) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">{selectedRegion.name}</h1>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {selectedRegion.prefectures.map((pref) => (
                        <button
                            key={pref.id}
                            className="p-4 bg-green-100 hover:bg-green-300 rounded-lg"
                            onClick={() => setSelectedPrefecture(pref)}
                        >
                            {pref.name}
                        </button>
                    ))}
                </div>
                <button
                    className="mt-6 text-blue-500 underline"
                    onClick={() => setSelectedRegion(null)}
                >
                    全国に戻る
                </button>
            </div>
        );
    }

    return (
        <div className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-6">{selectedPrefecture && (
                <MapView
                    prefectureId={selectedPrefecture.id}
                    prefectureName={selectedPrefecture.name}
                />
            )}</h1>
            <div className="flex justify-center gap-6">
                <button className="p-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    地図から探す
                </button>
                <button className="p-6 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                    一覧から探す
                </button>
            </div>
            <button
                className="mt-6 text-blue-500 underline"
                onClick={() => setSelectedPrefecture(null)}
            >
                {selectedRegion.name} に戻る
            </button>
        </div>
    );
};
