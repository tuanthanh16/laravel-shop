<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Product class
Route::get('/list-products',[ProductController::class, 'index'])->name('api.list-products');
Route::get('/search-products',[ProductController::class, 'search'])->name('api.search-products');


Route::get('/list-categories',[CategoryController::class, 'index'])->name('api.list-categories');
