<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrefectureSeeder extends Seeder
{
    public function run(): void
    {
        $prefectures = [
            // 北海道
            ['name' => '北海道', 'region_id' => 1, 'lat' => 43.06417, 'lng' => 141.34694],

            // 東北
            ['name' => '青森県', 'region_id' => 2, 'lat' => 40.82444, 'lng' => 140.74],
            ['name' => '岩手県', 'region_id' => 2, 'lat' => 39.70361, 'lng' => 141.1525],
            ['name' => '宮城県', 'region_id' => 2, 'lat' => 38.26889, 'lng' => 140.87194],
            ['name' => '秋田県', 'region_id' => 2, 'lat' => 39.71861, 'lng' => 140.1025],
            ['name' => '山形県', 'region_id' => 2, 'lat' => 38.24056, 'lng' => 140.36333],
            ['name' => '福島県', 'region_id' => 2, 'lat' => 37.75, 'lng' => 140.46778],

            // 関東
            ['name' => '茨城県', 'region_id' => 3, 'lat' => 36.34139, 'lng' => 140.44667],
            ['name' => '栃木県', 'region_id' => 3, 'lat' => 36.56583, 'lng' => 139.88361],
            ['name' => '群馬県', 'region_id' => 3, 'lat' => 36.39111, 'lng' => 139.06083],
            ['name' => '埼玉県', 'region_id' => 3, 'lat' => 35.85694, 'lng' => 139.64889],
            ['name' => '千葉県', 'region_id' => 3, 'lat' => 35.60472, 'lng' => 140.12333],
            ['name' => '東京都', 'region_id' => 3, 'lat' => 35.68944, 'lng' => 139.69167],
            ['name' => '神奈川県', 'region_id' => 3, 'lat' => 35.44778, 'lng' => 139.6425],

            // 中部
            ['name' => '新潟県', 'region_id' => 4, 'lat' => 37.90222, 'lng' => 139.02361],
            ['name' => '富山県', 'region_id' => 4, 'lat' => 36.69528, 'lng' => 137.21139],
            ['name' => '石川県', 'region_id' => 4, 'lat' => 36.59444, 'lng' => 136.62556],
            ['name' => '福井県', 'region_id' => 4, 'lat' => 36.06528, 'lng' => 136.22194],
            ['name' => '山梨県', 'region_id' => 4, 'lat' => 35.66389, 'lng' => 138.56833],
            ['name' => '長野県', 'region_id' => 4, 'lat' => 36.65139, 'lng' => 138.18111],
            ['name' => '岐阜県', 'region_id' => 4, 'lat' => 35.39111, 'lng' => 136.72222],
            ['name' => '静岡県', 'region_id' => 4, 'lat' => 34.97694, 'lng' => 138.38306],
            ['name' => '愛知県', 'region_id' => 4, 'lat' => 35.18028, 'lng' => 136.90667],

            // 近畿
            ['name' => '三重県', 'region_id' => 5, 'lat' => 34.73028, 'lng' => 136.50861],
            ['name' => '滋賀県', 'region_id' => 5, 'lat' => 35.00444, 'lng' => 135.86833],
            ['name' => '京都府', 'region_id' => 5, 'lat' => 35.02139, 'lng' => 135.75556],
            ['name' => '大阪府', 'region_id' => 5, 'lat' => 34.68639, 'lng' => 135.52],
            ['name' => '兵庫県', 'region_id' => 5, 'lat' => 34.69139, 'lng' => 135.18306],
            ['name' => '奈良県', 'region_id' => 5, 'lat' => 34.68528, 'lng' => 135.83278],
            ['name' => '和歌山県', 'region_id' => 5, 'lat' => 34.22611, 'lng' => 135.1675],

            // 中国
            ['name' => '鳥取県', 'region_id' => 6, 'lat' => 35.50361, 'lng' => 134.23833],
            ['name' => '島根県', 'region_id' => 6, 'lat' => 35.47222, 'lng' => 133.05056],
            ['name' => '岡山県', 'region_id' => 6, 'lat' => 34.66167, 'lng' => 133.935],
            ['name' => '広島県', 'region_id' => 6, 'lat' => 34.39639, 'lng' => 132.45944],
            ['name' => '山口県', 'region_id' => 6, 'lat' => 34.18583, 'lng' => 131.47139],

            // 四国
            ['name' => '徳島県', 'region_id' => 7, 'lat' => 34.06583, 'lng' => 134.55944],
            ['name' => '香川県', 'region_id' => 7, 'lat' => 34.34028, 'lng' => 134.04333],
            ['name' => '愛媛県', 'region_id' => 7, 'lat' => 33.84167, 'lng' => 132.76611],
            ['name' => '高知県', 'region_id' => 7, 'lat' => 33.55972, 'lng' => 133.53111],

            // 九州・沖縄
            ['name' => '福岡県', 'region_id' => 8, 'lat' => 33.60639, 'lng' => 130.41806],
            ['name' => '佐賀県', 'region_id' => 8, 'lat' => 33.24944, 'lng' => 130.29889],
            ['name' => '長崎県', 'region_id' => 8, 'lat' => 32.74472, 'lng' => 129.87361],
            ['name' => '熊本県', 'region_id' => 8, 'lat' => 32.78972, 'lng' => 130.74167],
            ['name' => '大分県', 'region_id' => 8, 'lat' => 33.23806, 'lng' => 131.6125],
            ['name' => '宮崎県', 'region_id' => 8, 'lat' => 31.91111, 'lng' => 131.42389],
            ['name' => '鹿児島県', 'region_id' => 8, 'lat' => 31.56028, 'lng' => 130.55806],
            ['name' => '沖縄県', 'region_id' => 8, 'lat' => 26.2125, 'lng' => 127.68111],
        ];

        DB::table('prefectures')->insert($prefectures);
    }
}
