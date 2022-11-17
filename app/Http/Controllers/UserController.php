<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function getAuthUser()
    {
        $user = auth()->user();
        if ($user) {
            return $user;
        } else {
            return null;
        }
    }
}
