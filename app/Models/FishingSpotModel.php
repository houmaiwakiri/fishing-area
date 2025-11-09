<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FishingSpotModel extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'prefecture_id', 'lat', 'lng'];
}
