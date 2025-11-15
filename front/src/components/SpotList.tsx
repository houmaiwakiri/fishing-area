import type { FishingSpot } from '../types';

interface SpotListProps {
    spots: FishingSpot[];
}

export default function SpotList({ spots }: SpotListProps) {
    return (
        <div className="spot-list mt-4">
            {spots.map((spot) => (
                <div key={spot.id} className="spot-list-item">
                    <div className="spot-name font-semibold">{spot.name}</div>
                    <div className="spot-fishes text-sm text-blue-700">
                        {spot.fishes.map(f => f.name).join(', ')}
                    </div>
                </div>
            ))}
        </div>
    );
}
