import type { FishingSpot } from '../types';

interface Props {
    spot: FishingSpot | null;
    onClose: () => void;
}

export default function SpotDetailModal({ spot, onClose }: Props) {
    if (!spot) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{spot.name}</h2>

                <div className="modal-info">
                    <p>緯度: {spot.lat}</p>
                    <p>経度: {spot.lng}</p>
                    <p>魚種: {spot.fishes?.join(', ')}</p>
                </div>

                <button className="modal-close-btn" onClick={onClose}>閉じる</button>
            </div>
        </div>
    );
}
