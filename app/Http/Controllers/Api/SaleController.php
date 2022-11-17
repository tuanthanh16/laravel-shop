<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    //
    public function store(Request $request){
        $sale = Sale::create($request->all());
        //Create new sale with only ID
        // and default value
        return $sale;
    }


    public function index(){
        $sales = Sale::all();
        return $sales;
    }

    public function show($sale_id){
        $sale = Sale::findOrFail($sale_id);
        return $sale;
    }

    //route /admin/sale/{$sale_id}/delete
    public function delete($sale_id){
        $sale = Sale::findOrFail($sale_id);
        $sale->delete();
        return response()->json([
            "status" => 1,
            "message" => "Sale deleted"
        ]);
    }
}
