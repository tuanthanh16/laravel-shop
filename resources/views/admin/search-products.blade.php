@extends('layout.main')

@section('content')
    <div class="search">
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
@endsection
