@extends('layout.main')

@section('content')
    <h2>List of Sales</h2>
    <table class="sale">
        <thead>
            <tr class="sale_header">
                <td class="sale_nr">Sale number</td>
                <td class="sale_toal">Total</td>
                <td class="sale_status">Status</td>
                <td class="sale_customer">Customer ID</td>
                <td class="sale_date">Date</td>
            </tr>
        </thead>
        <tbody>
            @foreach ($sales as $sale)
                <tr>
                    <td>{{ $sale->sale_nr }}</td>
                    <td>{{ $sale->total }}</td>
                    <td>{{ $sale->status }}</td>
                    <td>{{ $sale->customer_id }}</td>
                    <td>{{ $sale->created_at }}</td>
                    <td><a href={{ route('sale.show', $sale->id) }}>Edit</a></td>

                </tr>
            @endforeach
        </tbody>

    </table>
@endsection
