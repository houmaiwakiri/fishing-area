<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fishes extends Model
{
    protected $fillable = ['name'];

    public function fishingSpots()
    {
        return $this->belongsToMany(FishingSpot::class, 'fishing_spot_fish');
    }
}
