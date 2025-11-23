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
                    {/* 魚種 */}
                    {spot.fishes && spot.fishes.length > 0 && (
                        <div className="fishes">
                            <h3>魚種</h3>
                            <ul className="fish-list">
                                {spot.fishes && spot.fishes.length > 0 && (
                                    <p>{spot.fishes.map(f => f.name).join(', ')}</p>
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                {/* 簡易地図（後で実装） */}
                <div className="preview-map">
                    {/* ここを MiniMap コンポーネントに差し替える */}
                    <div className="map-placeholder">
                        簡易地図プレビュー（未実装）
                    </div>
                </div>

                <button className="modal-close-btn" onClick={onClose}>閉じる</button>
            </div>
        </div>
    );
}
