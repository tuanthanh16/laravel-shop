<?php

use App\Http\Controllers\Admin\SaleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController as AdminProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index.index')->name('index.home');
Route::view('/about-us', 'about.about-us');

//this route is for the testing purpose
Route::view('/test', 'index.test');

Route::get('/cart', [SaleController::class, 'intoCart'])->name('cart');
Route::get('/order/{sale_id}', [SaleController::class, 'order'])->name('sale.order');
Route::get('/product/search', [AdminProductController::class, 'search'])->name('product.search');
