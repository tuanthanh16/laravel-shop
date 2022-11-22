<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DiscountController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\SaleDetailController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

// Product class
Route::get('/list-products', [ProductController::class, 'index'])->name('api.list-products');
Route::get('/search-products/{keyword}', [ProductController::class, 'search'])->name('api.search-products');


Route::get('/list-categories', [CategoryController::class, 'index'])->name('api.list-categories');
Route::get('/products/{category_id}', [ProductController::class, 'getProductsByCategory'])->name('api.get-products-category');
// Route::get('/user', [UserController::class, 'getAuthUser']);

Route::get('/redeem/{code}',[DiscountController::class, 'redeem']);

// these routes are for login from SPA
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

//sale controller
Route::post('/create-sale', [SaleController::class, 'store']);

// sale_detail controller
Route::post('/create-detail', [SaleDetailController::class, 'store']);