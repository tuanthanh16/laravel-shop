@extends('layout.main')

@section('content')
    {{-- @if ($errors->count())
        @foreach ($errors->all() as $error)
            <div class="error">{{ $error }}</div>
        @endforeach
    @endif --}}

    @include('common.error')

    <form action="{{ route('register') }}" method="post">

        @csrf
        <label>Name</label><br>
        <input name="name" type="text" value="{{ old('name') }}"><br>

        <label>Surname</label><br>
        <input name="surname" type="text" value="{{ old('name') }}"><br>

        <label>Email</label><br>
        <input name="email" type="email" value="{{ old('email') }}"><br>

        <label>Password</label><br>
        <input name="password" type="password" value=""><br>

        <label>Password confirmation</label><br>
        <input name="password_confirmation" type="password" value=""><br>

        <button>Register</button>

    </form>
@endsection
