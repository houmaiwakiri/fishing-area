export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export interface FishingSpot {
    id: number;
    name: string;
    lat: number;
    lng: number;
    prefecture_id: number;
}

export async function getFishingSpots(prefectureId: number): Promise<FishingSpot[]> {
    const res = await fetch(`${API_BASE}/spots?prefecture_id=${prefectureId}`);
    return res.json();
}

export async function createFishingSpot(data: Omit<FishingSpot, "id">) {
    const res = await fetch(`${API_BASE}/spots`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}
