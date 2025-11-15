import type { FishingSpot, Fishes } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export async function getFishingSpots(prefectureId?: number): Promise<FishingSpot[]> {
    const url = prefectureId
        ? `${API_BASE_URL}/spots/prefecture/${prefectureId}`
        : `${API_BASE_URL}/spots`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed');

    const data = await res.json();

    return data.map((item: any) => ({
        ...item,
        lat: Number(item.lat),
        lng: Number(item.lng),
        fishes: Array.isArray(item.fishes)
            ? item.fishes.map((f: any) => ({ id: f.id, name: f.name } as Fishes))
            : [],
    }));
}
