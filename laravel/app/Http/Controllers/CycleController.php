<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;

class CycleController extends Controller
{
  public function update(Request $request) {
    return response()->json(['Update is not operational yet'], 400);
  }

  /**
   * This function allows a different system to calculate new xp for multiple users.
   * The params they need to send to the API are a VALID ADMIN authentication token,
   * and the id's of the users they want to update.
   * @param Request $request
   */
  public function addDay(Request $request) {

    // Check if the user is an admin. Uses User::isAdmin();
    $admin = Auth::guard('api')->user();
    if (!$admin->isAdmin()) {
      return response()->json(['error' => 'Not Authorized. You need to be an admin.'], 401);
    }

    // Check if a valid array of users has been passed...
    $validator = Validator::make($request->all(),[
      'users' => 'required|array',
    ]);

    // If it fails, return the errors
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    // Get the users from the request
    $users = $request->users;

    // Format the response
    $response = array(
      'message' => 'Day Added. XP Calculated for following users',
      'users' => array(),
    );

    // For each user_id, run this function
    foreach ($users as $key => $user) {
      // Fetch the user from the database
      $userFromDatabase = User::where('id', $user)->first();
      // If they exist, Call User::addDayWorked()
      // This function will also call User::calculateLevel() afterwards
      if (!empty($userFromDatabase)) {
        $userObject = $userFromDatabase->addDayWorked();
        // Add the returned (updated) user to the response
        $response['users'][$key] = $userObject;
      } else {
        // If they don't exist, Add a warning message
        $response['users'][$key] = "User with id '{$user}' does not exist";
      }
    }

    // Return the response
    return response()->json($response, 200);
  }
}
