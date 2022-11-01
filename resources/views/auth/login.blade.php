@extends('layout.main')

@section('content')

    @if ($errors->count())
        @foreach ($$errors->all() as $error)
            <div class="error">{{ $error }}</div>
        @endforeach
    @endif
    <div class="login-form">
        <form action="{{ route('login') }}" method="post">

            @csrf
            <label>Email</label><br>
            <input name="email" type="email" value="{{ old('email') }}"><br>

            <label>Password</label><br>
            <input name="password" type="password" value=""><br>

            <button class="btn-login">Login</button>

        </form>
    </div>
@endsection
