<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'code', 'description', 'price', 'stock', 'cat_id', 'discount_id', 'image'];
    public function category(){
        return $this->belongsTo(Category::class,'cat_id', 'id');
    }
}
