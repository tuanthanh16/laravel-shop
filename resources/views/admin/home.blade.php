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
                <a href={{ route('search') }}>Search Product</a>
            </div>
            <div class="dashboard_actions--sale">
                <a href={{ route('new.sale.form') }}>New Order</a>
                <a href={{ route('sale.list') }}>List Order</a>
                <a href="">Delete Order</a>
            </div>
            <div class="dashboard_actions--detail">
                <a href={{ route('new.detail.form') }}>New Order Detail</a>
                <a href="">Edit Order Detail</a>
                <a href="">Delete Order Detail</a>
            </div>
        </div>
    </div>
@endsection
