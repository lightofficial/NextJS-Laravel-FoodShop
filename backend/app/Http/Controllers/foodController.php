<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\food as FoodModel;

class foodController extends Controller
{
    public function getFoodList()
    {
        // $foodModel = FoodModel::all();
        $foodModel = [
            [
                'id' => 1,
                'category' => 'ซุป',
                'name' => 'ซุปหมาล่า',
            ],
        ];
        return response()->json($foodModel);
    }
}