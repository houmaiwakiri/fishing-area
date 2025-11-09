<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FishingSpotController;

// 釣り場
Route::get('/spots', [FishingSpotController::class, 'index']);           // 全件取得
Route::get('/spots/prefecture/{prefectureId}', [FishingSpotController::class, 'getByPrefecture']); // 県別取得
Route::post('/spots', [FishingSpotController::class, 'store']);          // 新規登録
Route::put('/spots/{id}', [FishingSpotController::class, 'update']);     // 更新
Route::delete('/spots/{id}', [FishingSpotController::class, 'destroy']); // 削除