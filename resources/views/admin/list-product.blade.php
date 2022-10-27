@extends('layout.main')

@section('content')
    <h2>List of product</h2>
    <table class="product">
        <thead>
            <tr class="product_header">
                <td class="product_name">Name</td>
                <td class="product_price">Price</td>
                <td class="product_code">Code</td>
                <td class="product_description">Description</td>
                <td class="product_stock">Stock</td>
                <td class="product_edit">Edit</td>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $product)
                <tr>
                    <td>{{ $product->name }}</td>
                    <td>{{ $product->price }}</td>
                    <td>{{ $product->code }}</td>
                    <td>{{ $product->description }}</td>
                    <td>{{ $product->stock }}</td>
                    <td><a href={{ route('product.show', $product->id) }}>Edit</a></td>

                </tr>
            @endforeach
        </tbody>

    </table>
@endsection
