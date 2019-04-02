<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\User;

class UserController extends Controller
{
  public function show()
  {
    $user = Auth::guard('api')->user();
    $user->data = \json_decode($user->data);
    return $user;
  }

  public function addXP(Request $request)
  {
    if (!$this->isAdmin()) {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $userId = $request->user_id;
    $xp = $request->xp;

    $user = User::where('id', $userId)->first();
    $data = json_decode($user->data, true);
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

    $validator = Validator::make($request->all(),[
      'user_id' => 'required|integer|exists:users,id',
      'schmeckles' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $schmeckles = $request->schmeckles;

    $user = User::where('id', $request->user_id)->first();
    $data = json_decode($user->data, true);
    if(empty($data))
    {
      $data = array();
    }

    $data['schmeckles'] += $schmeckles;
    $user->data = json_encode($data);
    $user->save();

    return response()->json(['result' => 'isAdmin', 'user' => $user], 200);
  }

  public function addAchievements(Request $request)
  {
    if(!$this->isAdmin())
    {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $validator = Validator::make($request->all(),[
      'user_id' => 'required|integer|exists:users,id',
      'achievement' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $achievement = $request->achievement;

    $user = User::where('id', $request->user_id)->first();
    $data = json_decode($user->data, true);
    if(empty($data))
    {
      $data = array();
    }

    array_push($data['achievements'], $achievement);
    $user->data = json_encode($data);
    $user->save();

    return response()->json(['result' => 'isAdmin', 'user' => $user], 200);

  }

  public function addRewards(Request $request)
  {
    if(!$this->isAdmin())
    {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $validator = Validator::make($request->all(),[
      'user_id' => 'required|integer|exists:users,id',
      'reward' => 'required|integer',
      'price' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $reward = $request->reward;
    $price = $request->price;

    $user = User::where('id', $request->user_id)->first();
    $data = json_decode($user->data, true);
    if(empty($data))
    {
      $data = array();
    }

    if($price > $data['schmeckels'])
    {
      return response()->json(['error' => 'You do not have enough schmeckels :('], 400);
    }
    else
    {
      $data['schmeckels'] -= $price;
    }

    array_push($data['rewards'], $reward);
    $user->data = json_encode($data);
    $user->save();

    return response()->json(['result' => 'isAdmin', 'user' => $user], 200);
  }

  public function removeRewards(Request $request)
  {
    if(!$this->isAdmin())
    {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    $validator = Validator::make($request->all(),[
      'user_id' => 'required|integer|exists:users,id',
      'reward' => 'required|integer',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $reward = $request->reward;

    $user = User::where('id', $request->user_id)->first();
    $data = json_decode($user->data, true);
    if(empty($data))
    {
      $data = array();
    }


    foreach ($data['rewards'] as $key => $value)
    {
      if($value === $reward)
      {
        unset($data['rewards'][$key]);
        break;
      }
    }
    $data['rewards'] = array_values($data['rewards']);
    
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
