<?php

use App\Http\Controllers\Admin\SaleController;
use Illuminate\Support\Facades\Route;

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
// Route::view('/cart', 'index.cart');
Route::get('/cart', [SaleController::class, 'intoCart']);
Route::get('/order/{sale_id}', [SaleController::class, 'order'])->name('sale.order');
