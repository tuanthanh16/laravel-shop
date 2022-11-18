<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    public function getAuthUser()
    {
        // $user = auth()->user();
        $user = Auth::user();
        // dd($user);
        if ($user) {

            $token = $user->createToken('auth_token')->plainTextToken;
            return [$user, $token];
        } else {
            return null;
        }
    }
}
