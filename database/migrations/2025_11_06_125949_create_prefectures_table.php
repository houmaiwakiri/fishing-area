<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('prefectures', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('region_id')->constrained()->onDelete('cascade');
            $table->decimal('lat', 10, 7)->nullable();  // 緯度
            $table->decimal('lng', 10, 7)->nullable();  // 経度
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('prefectures');
    }
};
