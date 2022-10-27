<?php

use App\Http\Controllers\Admin\ProductController as AdminProductController;
use Illuminate\Support\Facades\Route;

// This routes group is fo admin only
// defaut prefix = admin ->every url in this routes start with/ADMIN/
// change in RouteServiceProvider

Route::view('/', 'admin.home')->name('admin.home');
Route::view('/new-product-form', 'admin.create-product')->name('new.product.form');
Route::post('/save-product', [AdminProductController::class, 'store'])->name('product.create');
Route::get('/list-product', [AdminProductController::class, 'index'])->name('product.list');
Route::get('/single-product/{product_id}', [AdminProductController::class, 'show'])->name('product.show');
Route::post('/single-product/{product_id}/update', [AdminProductController::class, 'update'])->name('product.update');

Route::view('/create-sale', 'admin.create-sale');