@extends('layout.main')

@section('content')
    <h4>Create sale</h4>
    <form action={{ route('detail.create') }} method="post">

        @csrf

        <label>Product ID</label><br>
        <input name="product_id" type="text"><br>

        <label>Sale ID</label><br>
        <input name="sale_id" type="text"><br>

        <label>Quantity</label><br>
        <input name="quantity" type="text"><br>

        <button type="submit">Save</button>

    </form>
@endsection
