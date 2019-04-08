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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('register', 'Auth\RegisterController@register')->name('register');
Route::post('login', 'Auth\LoginController@login');

Route::group(['middleware' => 'auth:api'], function() {
  Route::post('logout', 'Auth\LoginController@logout');

  Route::get('user', 'UserController@show')->middleware('levelSystem');
  Route::post('user/xp', 'UserController@addXP');
  Route::post('user/schmeckles', 'UserController@addSchmeckles');
  Route::post('user/addAchievements', 'UserController@addAchievements');
  Route::get('user/achievements', 'UserController@getAchievements');
  Route::post('user/rewards', 'UserController@addRewards');
  Route::post('user/spendReward', 'UserController@removeRewards');

  Route::get('rewards', 'RewardController@index');
  Route::get('rewards/{reward}', 'RewardController@show');
  Route::post('rewards', 'RewardController@store');
  Route::put('rewards/{reward}', 'RewardController@update');
  Route::delete('rewards/{reward}', 'RewardController@delete');

  Route::get('achievements', 'AchievementController@index');
  Route::get('achievements/{achievement}', 'AchievementController@show');
  Route::post('achievements', 'AchievementController@store');
  Route::put('achievements/{achievement}', 'AchievementController@update');
  Route::delete('achievements/{achievement}', 'AchievementController@delete');

  Route::get('stories', 'StoryController@index');
  Route::get('stories/{story}', 'StoryController@show');
  Route::post('stories', 'StoryController@store');
  Route::put('stories/{story}', 'StoryController@update');
  Route::delete('stories/{story}', 'StoryController@delete');

  Route::post('cycle/update', 'CycleController@update');
  Route::post('cycle/addDay', 'CycleController@addDay');
});
