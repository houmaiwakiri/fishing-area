import type { Region, Prefecture } from "../types";
import regionsData from "../assets/data/regions.json";

interface AreaSelectorProps {
    onSelectPrefecture: (pref: Prefecture) => void;
}

export default function AreaSelector({ onSelectPrefecture }: AreaSelectorProps) {
    return (
        <div className="area-selector">
            {regionsData.map((region: Region) => (
                <div key={region.id} className="mb-6">
                    <h3 className="text-sky-800 font-semibold text-sm mb-3 tracking-wide border-b border-sky-100">
                        {region.name}
                    </h3>
                    <div
                        className="
              grid gap-3
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4
            "
                    >
                        {region.prefectures.map((pref) => (
                            <button
                                key={pref.id}
                                onClick={() => onSelectPrefecture(pref)}
                                className="
                  bg-gradient-to-br from-sky-50 to-cyan-50
                  border border-sky-100
                  rounded-xl p-3 sm:p-4 min-h-[60px]
                  text-sky-800 font-medium text-sm sm:text-base
                  shadow-sm hover:shadow-md
                  transition-all duration-150 ease-in-out
                  active:scale-[0.97] hover:-translate-y-[1px]
                  focus:outline-none
                "
                            >
                                {pref.name}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
