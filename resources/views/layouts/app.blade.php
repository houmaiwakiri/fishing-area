<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>釣り場ガイド</title>

    <!-- Tailwind CDN（開発中ならこれでOK） -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- あとで独自CSSを足す場合 -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body class="bg-white text-gray-900">

    <!-- ヘッダー -->
    <header class="bg-gray-900 text-white shadow-lg">
        <div class="container mx-auto flex justify-between items-center p-4">
            <h1 class="text-2xl font-bold">Fishing Area</h1>
            <nav class="space-x-4">
                <a href="/" class="hover:text-gray-300">ホーム</a>
                <a href="/about" class="hover:text-gray-300">紹介</a>
                <a href="/contact" class="hover:text-gray-300">お問い合わせ</a>
            </nav>
        </div>
    </header>

    <!-- コンテンツ部分 -->
    <main>
        @yield('content')
    </main>

    <!-- フッター -->
    <footer class="bg-gray-800 text-gray-400 text-center p-6 mt-10">
        <p>&copy; {{ date('Y') }} Fishing Area. All rights reserved.</p>
    </footer>

    <!-- JS読み込み -->
    <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
