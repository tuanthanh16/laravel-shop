@if ($errors->count())
    <div class=".alert alert-error">
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </div>
@endif
