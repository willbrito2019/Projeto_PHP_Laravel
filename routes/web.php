<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OlaMundoController;
use App\Http\Controllers\PostController;

Route::get('/', [OlaMundoController::class, 'index']);
Route::get('/posts', [PostController::class, 'index']);