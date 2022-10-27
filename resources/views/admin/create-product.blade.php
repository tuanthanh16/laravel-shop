@extends('layout.main')

@section('content')
    @include('common.error')
    @include('common.success')

    <h4>Create new product</h4>
    <form action={{ route('product.create') }} method="post">

        @csrf

        <label>Name</label><br>
        <input name="name" type="text" value="{{ old('name') }}"><br>

        <label>Code</label><br>
        <input name="code" type="text" value={{ old('code') }}><br>

        <label>Description</label><br>
        <input name="description" type="text" value={{ old('description') }}><br>

        <label>Price</label><br>
        <input name="price" type="text" value={{ old('price') }}><br>

        <label>Stock</label><br>
        <input name="stock" type="text" value={{ old('stock') }}><br>

        <label>Category number</label><br>
        <input name="cat_id" type="text" value={{ old('cat_id') }}><br>

        <label>Discount ID</label><br>
        <input name="discount_id" type="text" value={{ old('discount_id') }}><br>

        <label>Image link</label><br>
        <input name="image" type="text" value={{ old('image') }}><br>

        <button type="submit">Save</button>

    </form>
@endsection
