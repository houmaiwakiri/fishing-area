import type { Region, Prefecture } from '../types';
import rawRegionsData from '../assets/data/regions.json';

const regionsData: Region[] = rawRegionsData.map((region) => ({
    ...region,
    prefectures: region.prefectures.map((pref) => ({
        ...pref,
        center: [pref.center[0], pref.center[1]] as [number, number],
    })),
}));

interface AreaSelectorProps {
    onSelectPrefecture: (pref: Prefecture) => void;
}

export default function AreaSelector({ onSelectPrefecture }: AreaSelectorProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {regionsData.map((region) =>
                region.prefectures.map((pref) => (
                    <button
                        key={pref.id}
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => onSelectPrefecture(pref)}
                    >
                        {pref.name}
                    </button>
                ))
            )}
        </div>
    );
}
