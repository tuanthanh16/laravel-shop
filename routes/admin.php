<?php

use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\SaleController;
use App\Http\Controllers\Admin\SaleDetailController;
use Illuminate\Support\Facades\Route;

// This routes group is fo admin only
// defaut prefix = admin ->every url in this routes start with/ADMIN/
// change in RouteServiceProvider

Route::view('/', 'admin.home')->name('admin.home');

//Products

Route::view('/new-product-form', 'admin.create-product')->name('new.product.form');
Route::post('/save-product', [AdminProductController::class, 'store'])->name('product.create');
Route::get('/list-product', [AdminProductController::class, 'index'])->name('product.list');
Route::get('/single-product/{product_id}', [AdminProductController::class, 'show'])->name('product.show');
Route::post('/single-product/{product_id}/update', [AdminProductController::class, 'update'])->name('product.update');
Route::get('/product/{product_id}/delete', [AdminProductController::class, 'delete'])->name('product.delete');
Route::get('/product/search', [AdminProductController::class, 'search'])->name('product.search');
Route::view('/search', 'admin.search-products')->name('search');

//Sale routes

Route::view('/new-sale-form', 'admin.create-sale')->name('new.sale.form');
Route::post('/save-sale', [SaleController::class, 'store'])->name('sale.create');
Route::get('/sales', [SaleController::class, 'index'])->name('sale.list');
Route::get('/sale/{sale_id}', [SaleController::class, 'show'])->name('sale.show');
Route::post('/sale/{sale_id}/update', [SaleController::class, 'update'])->name('sale.update');
Route::get('/sale/{sale_id}/delete', [SaleController::class, 'delete'])->name('sale.delete');

//Sale-detail routes

Route::view('/new-detail-form', 'admin.create-detail')->name('new.detail.form');
Route::post('/save-detail', [SaleDetailController::class, 'store'])->name('detail.create');
Route::post('/detail/{detail_id}/update', [SaleDetailController::class, 'update'])->name('detail.update');