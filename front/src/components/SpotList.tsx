import type { FishingSpot } from "../types";

interface SpotListProps {
    spots: FishingSpot[];
}

export default function SpotList({ spots }: SpotListProps) {
    if (!spots.length) {
        return (
            <p className="text-sky-800/70 text-sm mt-3 italic text-center">
                釣り場データがありません
            </p>
        );
    }

    return (
        <div className="space-y-3 mt-2">
            {spots.map((spot) => (
                <div
                    key={spot.id}
                    className="
            spot-card bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100
            rounded-xl shadow-sm hover:shadow-md
            hover:-translate-y-0.5 transition-all duration-150 ease-in-out
            p-3 cursor-pointer
          "
                >
                    <h4 className="font-semibold text-sky-900 text-sm truncate tracking-wide">
                        {spot.name}
                    </h4>
                </div>
            ))}
        </div>
    );
}
