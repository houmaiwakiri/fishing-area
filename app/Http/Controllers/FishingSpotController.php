<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FishingSpotModel;

class FishingSpotController
{
    public function index(Request $request)
    {
        $prefectureId = $request->query('prefecture_id');
        $spots = FishingSpotModel::where('prefecture_id', $prefectureId)->get();
        return response()->json($spots);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'prefecture_id' => 'required|integer',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
        ]);
        $spot = FishingSpotModel::create($validated);
        return response()->json($spot, 201);
    }
}
