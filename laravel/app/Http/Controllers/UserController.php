<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\User;

class UserController extends Controller
{
  public function addXP(Request $request)
  {
    if (!$this->isAdmin()) {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $userId = $request->user_id;
    $xp = $request->xp;

    $user = User::where('id', $userId)->first();
    $data = json_decode($user->data);
    if (empty($data)) {
      $data = array();
    }

    $data['xp'] = $xp;
    $user->data = json_encode($data);
    $user->save();

    return response()->json(['result' => 'isAdmin', 'user' => $user], 200);
  }

  public function addSchmeckles(Request $request)
  {
    if(!$this->isAdmin())
    {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $schmeckles = $request->schmeckles;

    $user = User::where('id', $request->user_id)->first();
    $data = json_decode($user->data);
    if(empty($data))
    {
      $data = array();
    }

    $data['schmeckles'] = $schmeckles;
    $user->data = json_encode($data);
    $user->save();

    return response()->json(['result' => 'isAdmin', 'user' => $user], 200);
  }

  protected function isAdmin()
  {
    $user = Auth::guard('api')->user();
    if ($user->type === 2) {
      return true;
    }
    return false;
  }
}
