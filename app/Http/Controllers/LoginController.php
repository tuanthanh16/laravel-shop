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

        return $request->user();
    }

    public function logout() {
        return Auth::logout();
    }
}
