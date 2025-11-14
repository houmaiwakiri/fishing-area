<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FishingSpotFishSeeder extends Seeder
{
    public function run()
    {
        $mappings = [
            // 釣り場ID => 魚ID配列
            1 => [1, 2],       // 釣ヶ崎海岸 → アジ、サバ
            2 => [2, 3],       // 九十九里浜 → サバ、イワシ
            3 => [1, 4],       // 湘南海岸 → アジ、カサゴ
            4 => [5],          // オリジナルメーカー海釣り公園 → タイ
            5 => [1, 5],       // 千倉漁港 → アジ、タイ
        ];

        foreach ($mappings as $spotId => $fishIds) {
            foreach ($fishIds as $fishId) {
                DB::table('fishing_spot_fish')->insert([
                    'fishing_spot_id' => $spotId,
                    'fish_id' => $fishId,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ]);
            }
        }
    }
}
