import type { FishingSpot } from '../types';

interface SpotListProps {
    spots: FishingSpot[];
}

export default function SpotList({ spots }: SpotListProps) {
    return (
        <div className="overflow-y-auto max-h-[80vh]">
            <ul>
                {spots.map((spot) => (
                    <li key={spot.id} className="p-2 border-b">{spot.name}</li>
                ))}
            </ul>
        </div>
    );
}
