<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>釣り場マップ</title>

    {{-- Leaflet --}}
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    {{-- Tailwind（開発用CDN版） --}}
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        html, body {
            height: 100%;
            margin: 0;
        }
        #map {
            height: 100vh;
            width: 100%;
        }
    </style>
</head>
<body class="bg-gray-100 flex flex-col">
    <header class="p-4 bg-blue-700 text-white text-xl font-bold text-center">
        日本釣り場マップ
    </header>

    <div class="flex flex-1">
        {{-- 地図エリア --}}
        <div id="map" class="flex-1"></div>

        {{-- 右側リストエリア --}}
        <aside class="w-80 bg-white shadow-md border-l overflow-y-auto">
            <div class="p-4 border-b font-bold text-lg">人気スポット</div>
            <ul id="spot-list" class="p-4 space-y-2">
                <li class="text-blue-600 hover:underline cursor-pointer">湘南海岸</li>
                <li class="text-blue-600 hover:underline cursor-pointer">若狭湾</li>
                <li class="text-blue-600 hover:underline cursor-pointer">鹿児島湾</li>
            </ul>
        </aside>
    </div>

    <script>
        // 初期化
        const map = L.map('map').setView([36.2048, 138.2529], 5); // 日本中心

        // OpenSeaMap タイル（海岸線強調）
        const osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; OpenStreetMap contributors'
        });

        const seaLayer = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenSeaMap contributors'
        });

        osmLayer.addTo(map);
        seaLayer.addTo(map);

        // 仮スポット表示
        const spots = [
            { name: "湘南海岸", lat: 35.308, lng: 139.481 },
            { name: "若狭湾", lat: 35.583, lng: 135.383 },
            { name: "鹿児島湾", lat: 31.6, lng: 130.6 },
        ];

        spots.forEach(s => {
            const marker = L.marker([s.lat, s.lng]).addTo(map);
            marker.bindPopup(`<b>${s.name}</b>`);
        });
    </script>
</body>
</html>
