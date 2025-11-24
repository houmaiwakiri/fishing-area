import type { FishingSpot } from '../types';

interface Props {
    spot: FishingSpot | null;
    onClose: () => void;
}

export default function SpotDetail({ spot, onClose }: Props) {
    if (!spot) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">{spot.name}</h2>

                <div className="modal-info">
                    {spot.fishes && spot.fishes.length > 0 && (
                        <div className="fishes">
                            <h3>魚種</h3>
                            <p>{spot.fishes.map(f => f.name).join(', ')}</p>
                        </div>
                    )}
                </div>

                <div className="preview-map">
                    <div className="map-placeholder">
                        簡易地図プレビュー（未実装）
                    </div>
                </div>

                <button className="modal-close-btn" onClick={onClose}>閉じる</button>
            </div>
        </div>
    );
}
