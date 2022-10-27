@extends('layout.main')

@section('content')
    @include('common.error')
    <h2>Product information</h2>
    {{-- @dd($product) --}}
    <form action={{ route('product.update', $product->id) }} method='post'>

        @csrf

        <label>Name</label><br>
        <input name="name" type="text" value="{{ $product->name }}"><br>

        <label>Code</label><br>
        <input name="code" type="text" value={{ $product->code }}><br>

        <label>Description</label><br>
        <input name="description" type="text" value="{{ $product->description }}"><br>

        <label>Price</label><br>
        <input name="price" type="text" value={{ $product->price }}><br>

        <label>Stock</label><br>
        <input name="stock" type="text" value={{ $product->stock }}><br>

        <label>Category number</label><br>
        <input name="cat_id" type="text" value={{ $product->cat_id }}><br>

        <label>Discount ID</label><br>
        <input name="discount_id" type="text" value={{ $product->discount_id }}><br>

        <label>Image link</label><br>
        <input name="image" type="text" value={{ $product->image }}><br>

        <button type="submit">Update</button>
    </form>
@endsection
