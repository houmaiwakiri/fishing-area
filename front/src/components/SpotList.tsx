import type { FishingSpot, MovePayload } from '../types';

interface SpotListProps {
    spots: FishingSpot[];
    onMove: (payload: MovePayload) => void;
    onDetail: (spot: FishingSpot) => void;
}

export default function SpotList({ spots, onMove, onDetail }: SpotListProps) {
    return (
        <div className="spot-list mt-4">
            {spots.map((spot) => (
                <div
                    key={spot.id}
                    className="spot-list-item flex items-center justify-between py-1 px-2"
                >
                    <div
                        className="cursor-pointer font-semibold mr-2"
                        onClick={() => onMove({ center: [spot.lat, spot.lng], zoom: 12 })}
                    >
                        {spot.name}
                    </div>
                    <button
                        className="detail-button flex-shrink-0"
                        onClick={() => onDetail(spot)}
                    >
                        詳細
                    </button>
                </div>
            ))}
        </div>
    );
}
