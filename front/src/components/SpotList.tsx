import type { FishingSpot } from "../types";

interface SpotListProps {
    spots: FishingSpot[];
}

export default function SpotList({ spots }: SpotListProps) {
    if (!spots.length) {
        return <p className="text-gray-500 text-sm mt-2">釣り場情報がありません。</p>;
    }

    return (
        <div className="space-y-3 mt-2">
            {spots.map((spot) => (
                <div
                    key={spot.id}
                    className="
            spot-card bg-white border border-gray-200 rounded-xl shadow-sm
            hover:shadow-md hover:-translate-y-0.5 
            transition-all duration-150 ease-in-out
            p-3 cursor-pointer
          "
                >
                    <h4 className="font-semibold text-gray-800 text-sm truncate">
                        {spot.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                    </p>
                </div>
            ))}
        </div>
    );
}
