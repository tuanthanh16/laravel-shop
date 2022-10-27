@extends('layout.main')


@section('content')
    @include('common.error')
    @include('common.success')
    <div class="dashboard">
        <div class="dashboard_header">
            <h4>Admin Dashboard</h4>
        </div>
        <div class="dashboard_actions">
            <div class="dashboard_actions--product">
                <a href={{ route('new.product.form') }}>New Product</a>
                <a href={{ route('product.list') }}>List Product</a>
                <a href="">Delete Product</a>
            </div>
            <div class="dashboard_actions--sale">
                <a href="">New Order</a>
                <a href="">Edit Order</a>
                <a href="">Delete Order</a>
            </div>
        </div>
    </div>
@endsection
