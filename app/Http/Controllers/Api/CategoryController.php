<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index(){

        $categories = Category::get();
        
        return response()->json([
            "status" => 1,
            "message" => "Categories load successfully",
            "data" => $categories
        ]);
    }
}
