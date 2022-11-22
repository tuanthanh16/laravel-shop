<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SaleDetail;
use App\Models\Sale;
use App\Models\Product;

class SaleDetailController extends Controller
{
    //
    public function store(Request $request){
        // create new sale_detail with sale_id, product_id, quantity
        $sale_detail = SaleDetail::create($request->all());
        //update related sale

        $sale = Sale::find($request->sale_id);
        $product = Product::find($request->product_id);

        $sale->total = $sale->total + $product->price * $request->quantity;
        $sale->save();

        
        return $sale_detail;
    }

    public function update(Request $request, $detail_id) {
        // sale_id, product_id should not be changed
        // only update the quantity
        // validate request
        $request->validate(['quantity' => 'numeric|min:0']);
        $detail = SaleDetail::findOrFail($detail_id);
        //find product
        $product = Product::findOrFail($detail->product_id);
        
        $change = $request->quantity - $detail->quantity;
        $detail->quantity = $request->quantity;
        $detail->save();

        //update linked sale

        $sale = Sale::find($detail->sale_id);
        $sale->total = $sale->total + $change * $product->price;
        $sale->save();

        
        return $detail;
    }
}
