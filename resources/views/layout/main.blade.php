<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <meta content="{{ csrf_token() }}" name="csrf-token">
    <title>Shop project</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />

    @vite('resources/css/app.scss')
    @vite('resources/css/bootstrap.css')
    @vite('resources/css/cart.css')
</head>

<body>
    <nav class="navbar">
        <div class="navbar_left">
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            {{-- search bar --}}
            <div class="navbar_search">
                <form action={{ route('product.search') }}>
                    <div class="inner-form">
                        <div class="first-wrap">
                            <div class="input-select">
                                <select data-trigger="" name="category">
                                    <option placeholder="">Category</option>
                                    <option>New products</option>
                                    <option>Sales</option>
                                    <option>Foods</option>
                                </select>
                            </div>
                        </div>
                        <div class="second-wrap">
                            <input name="keyword" placeholder="Enter Keywords?" type="text" />
                        </div>
                        <div class="third-wrap">
                            <button class="btn-search" type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {{-- check if user login --}}
            @if (Auth::check())
                <form action="{{ route('logout') }}" method="post">

                    @csrf

                    <button class="navbar_logout">Logout</button>

                </form>
            @else
                {{-- user is not login --}}
                <a href='/register'>Register</a>
                <a href="/login">Login</a>
            @endif

            {{-- check admin middware --}}
            @can('admin')
                <span class="navbar_admin">Welcome Admin</span>
                <a href={{ route('admin.home') }}>Admin dashboard</a>
            @endcan
        </div>
        <div class="navbar_right">
            <a href={{ route('cart') }}><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </nav>

    @yield('content')

</body>

</html>
