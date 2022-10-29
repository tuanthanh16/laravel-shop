@extends('layout.main')

@section('content')
    @include('common.error')
    <h2>Sale information</h2>
    {{-- @dd($product) --}}
    <div class="sale_container">

        <div class="sale_container--form">
            <form action="" method='post'>

                @csrf

                <label>Sale number</label><br>
                <input name="sale_nr" type="text" value="{{ $sale->sale_nr }}"><br>

                <label>Total</label><br>
                <input disabled name="total" type="text" value={{ $sale->total }}><br>

                <label>Status</label><br>
                <input name="status" type="text" value="{{ $sale->status }}"><br>

                <label>Customer ID</label><br>
                <input name="customer_id" type="text" value={{ $sale->customer_id }}><br>

                <label>Date</label><br>
                <span>{{ $sale->created_at }}</span><br>


                <button type="submit">Update</button>
            </form>
        </div>
        <div class="sale_container--details">
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product ID</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($sale->details as $detail)
                        <tr>
                            <td>{{ $detail->id }}</td>
                            <td>{{ $detail->product_id }}</td>
                            <td>{{ $detail->quantity }}</td>
                        </tr>
                    @endforeach

                </tbody>
            </table>

        </div>
    </div>
@endsection
