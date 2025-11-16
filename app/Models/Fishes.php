<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fishes extends Model
{
    protected $fillable = ['name'];

    public function spots()
    {
        return $this->belongsToMany(
            FishingSpot::class,
            'fishing_spot_fish',
            'fish_id',
            'fishing_spot_id'
        );
    }
}
