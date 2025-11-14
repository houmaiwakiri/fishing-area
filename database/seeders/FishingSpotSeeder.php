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
        // --- 魚マスタ登録 ---
        $aji = Fishes::firstOrCreate(['name' => 'アジ']);
        $saba = Fishes::firstOrCreate(['name' => 'サバ']);
        $kasago = Fishes::firstOrCreate(['name' => 'カサゴ']);
        $tai = Fishes::firstOrCreate(['name' => 'タイ']);
        $iwashi = Fishes::firstOrCreate(['name' => 'イワシ']);

        // --- 釣り場登録 ---
        $spots = [
            [
                'name' => 'オリジナルメーカー海釣り公園',
                'prefecture_id' => 12,
                'lat' => 35.4912,
                'lng' => 140.0369,
                'fish_ids' => [$aji->id, $saba->id, $iwashi->id],
            ],
            [
                'name' => '千倉漁港',
                'prefecture_id' => 12,
                'lat' => 34.9492,
                'lng' => 139.9353,
                'fish_ids' => [$kasago->id, $tai->id],
            ],
        ];

        foreach ($spots as $spotData) {
            $spot = FishingSpot::create([
                'name' => $spotData['name'],
                'prefecture_id' => $spotData['prefecture_id'],
                'lat' => $spotData['lat'],
                'lng' => $spotData['lng'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);

            $spot->fishes()->attach($spotData['fish_ids']);
        }
    }
}
