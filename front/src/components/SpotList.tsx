import type { FishingSpot } from '../types';

interface SpotListProps {
    spots: FishingSpot[];
    onMove: (spot: FishingSpot) => void;
    onDetail: (spot: FishingSpot) => void;
}

export default function SpotList({ spots, onMove, onDetail }: SpotListProps) {
    return (
        <div className="spot-list mt-4">
            {spots.map((spot) => (
                <div key={spot.id} className="spot-list-item flex items-center justify-between py-1">

                    {/* 名前クリック → 地図移動 */}
                    <div
                        className="cursor-pointer font-semibold"
                        onClick={() => onMove(spot)}
                    >
                        {spot.name}
                    </div>

                    {/* 詳細ボタン */}
                    <button
                        className="detail-button"
                        onClick={() => onDetail(spot)}
                    >
                        詳細
                    </button>
                </div>
            ))}
        </div>
    );
}
