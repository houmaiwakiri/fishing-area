<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FishingSpot extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'lat', 'lng', 'prefecture_id'];

    public function fishes()
    {
        return $this->belongsToMany(
            Fishes::class,
            'fishing_spot_fish',
            'fishing_spot_id',
            'fish_id'
        )->withTimestamps();
    }
}
