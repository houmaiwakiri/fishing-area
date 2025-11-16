<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FishesSeeder extends Seeder
{
    public function run()
    {
        $fishes = require 'data/fishes/fishes.php';

        foreach ($fishes as $fish) {
            DB::table('fishes')->insert(array_merge($fish, [
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]));
        }
    }
}
