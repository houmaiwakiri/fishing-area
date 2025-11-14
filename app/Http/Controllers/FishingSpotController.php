<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FishingSpot;

class FishingSpotController
{
    // 全件取得
    public function index()
    {
        $spots = FishingSpot::with('fishes')->get();
        return response()->json($spots);
    }

    // 県IDで取得
    public function getByPrefecture($prefectureId)
    {
        $spots = FishingSpot::with('fishes')
            ->where('prefecture_id', $prefectureId)
            ->get();

        return response()->json($spots);
    }

    // 詳細取得（釣り場ID指定）
    public function show($id)
    {
        $spot = FishingSpot::findOrFail($id);
        return response()->json($spot);
    }

    // 登録
    public function store(Request $request)
    {
        $spot = FishingSpot::create($request->all());
        return response()->json($spot, 201);
    }

    // 更新
    public function update(Request $request, $id)
    {
        $spot = FishingSpot::findOrFail($id);
        $spot->update($request->all());
        return response()->json($spot);
    }

    // 削除
    public function destroy($id)
    {
        FishingSpot::destroy($id);
        return response()->json(['message' => 'deleted']);
    }
}
