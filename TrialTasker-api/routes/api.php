<?php

use App\Http\Controllers\CasoController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\PersonStageController;
use App\Http\Controllers\StageController;
use App\Http\Controllers\TypePersonController;
use App\Http\Controllers\TypeStageController;
use App\Http\Controllers\UserController;
use App\Models\PersonStage;
use App\Models\Stage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// ------------------------dashboard------------------------


Route::middleware(['auth:sanctum', 'authCookie','cors'])->get('/user', function (Request $request) {
    return $request->user();
});

//typePerson
Route::group([
    'prefix' => 'type-persons',
    'controller' => TypePersonController::class,
    'middleware' => ['auth:sanctum', 'verified', 'authCookie','cors']
], function () {
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// users
route::group([
    'prefix'=> 'users',
    'controller'=> UserController::class,
    'middleware' => ['auth:sanctum', 'verified', 'authCookie','cors']

],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// person
route::group([
    'prefix'=>'persons',
    'controller' => PersonController::class,
    'middleware' => ['cors','auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// caso
route::group([
    'prefix'=>'cases',
    'controller' => CasoController::class,
    'middleware' => ['cors', 'auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

//type_stage
route::group([
    'prefix'=>'typeStages',
    'controller' => TypeStageController::class,
    'middleware' => ['cors','auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});


//stages
route::group([
    'prefix'=>'stages',
    'controller' => StageController::class,
    'middleware' => ['cors','auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// personStage
route::group([
    'prefix'=>'personStages',
    'controller' => PersonStageController::class,
    'middleware' => ['cors','auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});

// files
route::group([
    'prefix'=>'files',
    'controller' => FileController::class,
    'middleware' => ['cors','auth:sanctum', 'verified', 'authCookie']
],function(){
    Route::get('/', 'index');
    Route::get('/all','all');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'destroy');
});



// ------------------------user------------------------

// casos del usuario
Route::get('/casesActive',[CasoController::class, 'casesActive'])->middleware('cors');
Route::get('/casesInactive',[CasoController::class, 'casesInactive'])->middleware('cors');
Route::get('/infoCase/{id}',[StageController::class, 'infoCase'])->middleware('cors');