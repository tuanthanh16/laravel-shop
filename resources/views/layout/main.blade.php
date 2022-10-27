<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Shop project</title>

    @vite('resources/css/app.scss')
</head>

<body>
    <nav class="navbar">
        <a href="/">Home</a>
        <a href="/about-us">About</a>

        {{-- check if user login --}}
        @if (Auth::check())
            <form action="{{ route('logout') }}" method="post">

                @csrf

                <button class="navbar_logout">Logout</button>

            </form>
        @else
            <a href='/register'>Register</a>
            <a href="/login">Login</a>
        @endif

        {{-- check admin middware --}}
        @can('admin')
            <span class="navbar_admin">Welcome Admin</span>
        @endcan

    </nav>

    @yield('content')

</body>

</html>
