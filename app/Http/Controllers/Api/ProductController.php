<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //this controller provide Api endpoint to frontend
    //get method, url api/list-product
    public function index(){

        $products = Product::get();
        
        return response()->json([
            "status" => 1,
            "message" => "Products load successfully",
            "data" => $products
        ]);
    }
}
