export interface Prefecture {
    id: number;
    name: string;
    center: [number, number];
}

export interface Region {
    id: number;
    name: string;
    prefectures: Prefecture[];
}

export interface FishingSpot {
    id: number;
    name: string;
    prefecture_id: number;
    lat: number;
    lng: number;
}
