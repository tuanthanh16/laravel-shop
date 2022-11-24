<?php

namespace App\Http\Controllers;

use App\Mail\CustomerMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function basic_email(Request $request)
    {
        // dd($request);
        $name = $request->name;
        $email = $request->email;
        $content = $request->content;

        Mail::to('info@shop.com')
            ->cc('admin@shop.com')
            ->send(new CustomerMessage($name, $email, $content));
        return "Basic Email Sent. Check your inbox.";
    }
}
