<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <link href="{{ asset('/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/cart.css') }}" rel="stylesheet">

    <title>Document</title>
</head>

<body>

    <table class="table cart mb-5">
        <thead>
            <tr>
                <th class="cart-product-remove">&nbsp;</th>
                <th class="cart-product-thumbnail">&nbsp;</th>
                <th class="cart-product-name">Product</th>
                <th class="cart-product-price">Unit Price</th>
                <th class="cart-product-quantity">Quantity</th>
                <th class="cart-product-subtotal">Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($results as $result)
                <tr class="cart_item">
                    <td class="cart-product-remove">
                        <a class="remove" href="#" title="Remove this item"><i class="icon-trash2"></i></a>
                    </td>
                    <td class="cart-product-thumbnail">
                        {{-- <a href="#"><img alt="Product 1" height="64"
                            src={{ asset("") }}
                            width="64"></a> --}}
                    </td>
                    <td class="cart-product-name">
                        <a href="#">{{ $result->name }}</a>
                    </td>
                    <td class="cart-product-price">
                        <span class="amount">{{ $result->price }}</span>
                    </td>
                    <td class="cart-product-quantity">
                        <div class="quantity">
                            <input class="minus" type="button" value="-">
                            <input class="qty" name="quantity" type="text" value="{{ $result->quantity }}" />
                            <input class="plus" type="button" value="+">
                        </div>
                    </td>
                    <td class="cart-product-subtotal">
                        <span class="amount">{{ number_format($result->price * $result->quantity, 2) }}</span>
                    </td>
                </tr>
            @endforeach


            {{-- <tr class="cart_item">
                <td colspan="6">
                    <div class="row justify-content-between py-2 col-mb-30">
                        <div class="col-lg-auto ps-lg-0">
                            <div class="row">
                                <div class="col-md-8">
                                    <input class="sm-form-control text-center text-md-start"
                                        placeholder="Enter Coupon Code.." type="text" value="" />
                                </div>
                                <div class="col-md-4 mt-3 mt-md-0">
                                    <a class="button button-3d button-black m-0" href="#">Apply Coupon</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-auto pe-lg-0">
                            <a class="button button-3d m-0" href="#">Update Cart</a>
                            <a class="button button-3d mt-2 mt-sm-0 me-0" href="shop.html">Proceed to Checkout</a>
                        </div>
                    </div>
                </td>
            </tr> --}}
        </tbody>
    </table>
</body>

</html>
