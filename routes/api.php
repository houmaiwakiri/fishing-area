<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FishingSpotController;

Route::get('/spots', [FishingSpotController::class, 'index']);
Route::post('/spots', [FishingSpotController::class, 'store']);
