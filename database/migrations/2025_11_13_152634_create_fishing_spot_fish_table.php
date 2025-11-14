<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('fishing_spot_fish', function (Blueprint $table) {
            $table->id();

            $table->foreignId('fishing_spot_id')
                ->constrained('fishing_spots')
                ->onDelete('cascade');

            $table->foreignId('fish_id')
                ->constrained('fishes')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fishing_spot_fish');
    }
};
