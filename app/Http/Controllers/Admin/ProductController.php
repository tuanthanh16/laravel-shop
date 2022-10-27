<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //post method, url admin/save-product
    public function store(Request $request){
        //validation
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            // 'code' => 'size:8'
        ]);
        $product = Product::create($request->all());

        $product->save();
        
        session()->flash('success_message','Product created successfully!');
        return redirect()->route('admin.home');
        
        // dd($product);
        
    }

    //get method, url admin/list-product
    public function index(){

        $products = Product::get();
        // dd($products);
        return view('admin.list-product', compact('products'));
    }

    public function show($product_id){
        $product = Product::findOrFail($product_id);
        
        // dd($product);
        return view('admin.single-product', compact('product'));
    }

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
        //flash message & redirect
        session()->flash('success_message','Product updated successfully!');
        return redirect()->route('admin.home');
    }
}
