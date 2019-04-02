<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;

class CycleController extends Controller
{
  public function update(Request $request) {
    // $story = Story::create($request->all());
    return response()->json(['Update is not operational yet'], 400);
  }

  public function addDay(Request $request) {
    // $story = Story::create($request->all());

    $admin = Auth::guard('api')->user();
    if (!$admin->isAdmin()) {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    // var_dump($request->users);
    // die();

    $validator = Validator::make($request->all(),[
      'users' => 'required|array',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $users = $request->users;


    foreach ($users as $key => $user) {
      $userFromDatabase = User::where('id', $user)->first();
      $userFromDatabase->addDayWorked();
    }

    return response()->json('Should be done', 200);
  }
}
