<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\SaleDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    //
    public function store(Request $request){
        $sale = Sale::create($request->all());
        //Create new sale with only ID
        // and default value

        session()->flash('success_message','Sale created successfully!');
        return redirect()->route('admin.home');
    }


    public function index(){
        $sales = Sale::all();
        return view('admin.list-sale', compact('sales'));
    }
    // show sale infor including details
    //route /admin/sale/{$sale_id}

    public function show($sale_id){
        $sale = Sale::findOrFail($sale_id);
        return view('admin.single-sale', compact('sale'));
    }

    //route /admin/sale/{$sale_id}/delete
    public function delete($sale_id){
        $sale = Sale::findOrFail($sale_id);
        $sale->delete();

        session()->flash('success_message','Sale deleted successfully!');
        return redirect()->route('admin.home');
    }
    //route /admin/sale/{$sale_id}/delete
    
    public function update(Request $request, $sale_id){
        $sale = Sale::findOrFail($sale_id);

        if (isset($request->sale_nr)) {
            //validation here
            $sale->sale_nr = $request->sale_nr;
        }
        if (isset($request->status)) {
            //validation here
            $request->validate(['status'=>'numeric|min:0|max:1']);
            $sale->status = $request->status;
        }
        if (isset($request->customer_id)) {
            //validation here
            $sale->customer_id = $request->customer_id;
        }

        $sale->save();

        session()->flash('success_message','Sale updated successfully!');
        return redirect()->route('admin.home');
    }

    // select unpaid sale of the user -> put to cart
    public function intoCart(){
        $user = auth()->user();
        $sale = Sale::where('customer_id','=',$user->id)
            ->where('status',0)
            ->first();
        if (!$sale) {
            return 'No record found';
        }
        //pass
        $details = $sale->details;
        // query
        $results = DB::table('sale_details')
            ->join('products','products.id', '=', 'sale_details.product_id')
            ->select('products.name','products.price','sale_details.quantity')
            ->where('sale_details.sale_id', $sale->id)
            ->get();
        
        return view('index.cart', compact('results'));
        dd($sale);
    }
}
