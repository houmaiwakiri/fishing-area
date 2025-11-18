import type { FishingSpot } from '../types';

interface SpotListProps {
    spots: FishingSpot[];
    onSelect: (lat: number, lng: number) => void;
}

export default function SpotList({ spots, onSelect }: SpotListProps) {
    return (
        <div className="spot-list mt-4">
            {spots.map((spot) => (
                <div
                    key={spot.id}
                    className="spot-list-item cursor-pointer"
                    onClick={() => onSelect(spot.lat, spot.lng)}
                >
                    <div className="spot-name font-semibold">{spot.name}</div>
                </div>
            ))}
        </div>
    );
}
