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

    // save product
    public function store(Request $request){
        //validation
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            // 'code' => 'size:8'
        ]);
        $product = Product::create($request->all());

        $product->save();
        
        return response()->json([
            "status" => 1,
            "message" => "Products created successfully",
            "data" => $product
        ]);
        
    }

    // update existing product
    // update information in request
    public function update(Request $request, $product_id){

        $product = Product::findOrFail($product_id);
        if (isset($request->name)) {
            $product->name = $request->name;            
        }
        if (isset($request->code)) {
            //validation if code = 5 characters
            $this->validate($request, ['code'=>'size:5']);
            $product->code = $request->code;            
        }
        if (isset($request->description)) {
            $product->description = $request->description;            
        }

        if (isset($request->price)) {
            //validation if price = number
            $this->validate($request, ['price'=>'numeric|gt:0']);
            $product->price = $request->price;            
        }
        if (isset($request->stock)) {
            //validation if stock = number
            $this->validate($request, ['stock'=>'numeric|min:0']);
            $product->stock = $request->stock;            
        }

        if (isset($request->cat_id)) {
            $product->cat_id = $request->cat_id;            
        }

        if (isset($request->discount_id)) {
            $product->discount_id = $request->discount_id;            
        }

        if (isset($request->image)) {
            $product->image = $request->image;            
        }

        $product->save();
        
        return response()->json([
            "status" => 1,
            "message" => "Products updated successfully",
            "data" => $product
        ]);
    }

    // delete existing product
    public function delete($product_id){
        $product = Product::findOrFail($product_id);
        $product->delete();
        return response()->json([
            "status" => 1,
            "message" => "Products deleted successfully"
        ]);
    }

    // search product by name or description
    public function search(){
        $keyword = $_GET['keyword'];
        $products = Product::where('name', 'like', "%".$keyword."%")
            ->orWhere('description', 'like', "%".$keyword."%")
            ->get();
        // dd($products);
        if (count($products) == 0 ) {
            return response()->json([
                    "status" => 0,
                    "message" => "Products not found",
                ]);
        } else {
            return response()->json([
                        "status" => 1,
                        "message" => "Products found",
                        "data" => $products
                    ]);}
        
    }
}
