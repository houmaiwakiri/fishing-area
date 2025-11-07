<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionSeeder extends Seeder
{
    public function run(): void
    {
        $regions = [
            ['id' => 1, 'name' => '北海道地方'],
            ['id' => 2, 'name' => '東北地方'],
            ['id' => 3, 'name' => '関東地方'],
            ['id' => 4, 'name' => '中部地方'],
            ['id' => 5, 'name' => '近畿地方'],
            ['id' => 6, 'name' => '中国地方'],
            ['id' => 7, 'name' => '四国地方'],
            ['id' => 8, 'name' => '九州・沖縄地方'],
        ];

        DB::table('regions')->insert($regions);
    }
}
