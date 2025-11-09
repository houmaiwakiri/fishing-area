<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FishingSpotController;

Route::get('/web', [FishingSpotController::class, 'index']);
Route::post('/web', [FishingSpotController::class, 'store']);
