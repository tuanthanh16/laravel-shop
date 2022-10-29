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
}
