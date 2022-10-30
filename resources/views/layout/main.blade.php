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
            {{-- user is not login --}}
            <a href='/register'>Register</a>
            <a href="/login">Login</a>
        @endif

        {{-- check admin middware --}}
        @can('admin')
            <span class="navbar_admin">Welcome Admin</span>
            <a href={{ route('admin.home') }}>Admin dashboard</a>
            {{-- search bar --}}
            <div class="navbar_search">
                <form action={{ route('product.search') }}>
                    <div class="inner-form">
                        <div class="input-field first-wrap">
                            <div class="input-select">
                                <select data-trigger="" name="category">
                                    <option placeholder="">Category</option>
                                    <option>New products</option>
                                    <option>Sales</option>
                                    <option>Foods</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-field second-wrap">
                            <input name="keyword" placeholder="Enter Keywords?" type="text" />
                        </div>
                        <div class="input-field third-wrap">
                            <button class="btn-search" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        @endcan

    </nav>

    @yield('content')

</body>

</html>
