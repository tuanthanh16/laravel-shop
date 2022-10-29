<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\Product;

use App\Models\SaleDetail;
use Illuminate\Http\Request;

class SaleDetailController extends Controller
{
    //
    public function store(Request $request){
        $sale_detail = SaleDetail::create($request->all());
        //update related sale

        $sale = Sale::find($request->sale_id);
        $product = Product::find($request->product_id);

        $sale->total = $sale->total + $product->price * $request->quantity;
        $sale->save();

        session()->flash('success_message','Sale detail created successfully!');
        return redirect()->route('admin.home');
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

        session()->flash('success_message','Sale detail updated successfully!');
        return redirect()->route('admin.home');
    }
}
