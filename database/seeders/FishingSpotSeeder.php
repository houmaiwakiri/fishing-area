<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FishingSpot;
use App\Models\Fishes;
use Carbon\Carbon;

class FishingSpotSeeder extends Seeder
{
    public function run()
    {
        // 魚マスタ取得
        $fishMap = Fishes::pluck('id', 'name');
        // 釣り場登録
        $dataPath = database_path('seeders/data/fishspot');
        foreach (glob($dataPath . '/*.php') as $file) {
            // 釣り場定義ファイルを県別に読み込む
            $spots = require $file;
            foreach ($spots as $spotData) {
                $spot = FishingSpot::create([
                    'name' => $spotData['name'],
                    'prefecture_id' => $spotData['prefecture_id'],
                    'lat' => $spotData['lat'],
                    'lng' => $spotData['lng'],
                ]);

                $ids = collect($spotData['fishes'])
                    ->map(fn($name) => $fishMap[$name])
                    ->toArray();

                $spot->fishes()->attach($ids);
            }
        }
    }
}
