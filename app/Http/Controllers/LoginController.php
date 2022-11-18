<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    //
    public function login(Request $request) {
        $login = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        if (! Auth::attempt($login)) {
            throw ValidationException::withMessages(['error']);
        }
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;
        return [$user, $token];
        // return $request->user();
    }

    public function logout() {
        return Auth::logout();
    }
}
