<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Discount;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    //
    public function redeem($code)
    {
        $discount = Discount::where('coupon',$code)->first();
        if ($discount) {
        $products = $discount->products;
        // return $discount;
        return [$discount, $products];
        } else {
            return null;
        }
    }
}
