<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('rewards', 'RewardController@index');
Route::get('rewards/{reward}', 'RewardController@show');
Route::post('rewards', 'RewardController@store');
Route::put('rewards/{reward}', 'RewardController@update');
Route::delete('rewards/{reward}', 'RewardController@delete');

Route::get('stories', 'StoryController@index');
Route::get('stories/{story}', 'StoryController@show');
Route::post('stories', 'StoryController@store');
Route::put('stories/{story}', 'StoryController@update');
Route::delete('stories/{story}', 'StoryController@delete');
