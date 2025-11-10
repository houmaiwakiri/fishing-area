<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FishingSpotSeeder extends Seeder
{
    public function run()
    {
        $spots = [
            ['name' => '釣ヶ崎海岸（志田下ポイント）', 'prefecture_id' => 12, 'lat' => 35.341667, 'lng' => 140.385278],
            ['name' => '九十九里浜', 'prefecture_id' => 12, 'lat' => 35.7167, 'lng' => 140.6167],
            ['name' => '湘南海岸', 'prefecture_id' => 14, 'lat' => 35.3136, 'lng' => 139.4822],
        ];

        foreach ($spots as $spot) {
            DB::table('fishing_spots')->insert(array_merge($spot, [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]));
        }
    }
}
