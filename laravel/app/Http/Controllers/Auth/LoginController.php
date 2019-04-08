<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Function for logging in the user
     * @param  Request $request
     * @return json The json response after logging in. Could be the user object or an error.
     */
    public function login(Request $request)
    {
        // Validate the login request
        $this->validateLogin($request);

        // If the user is logged in succesfully
        if ($this->attemptLogin($request)) {
            // Get the user
            $user = $this->guard()->user();
            // Generate a new API Token for this session
            $user->generateToken();
            // If the user has no default data yet, make it
            if (empty($user->data)) {
              $user->generateBaseData();
            }
            // Return the user as a json object
            return response()->json([
                'data' => $user->toArray(),
            ]);
        }

        // If the login was invalid, send a failed login response
        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Function for logging out the user
     * Will only be reached if the user is logged in due to middleware from Auth
     * @param  Request $request
     * @return json   The response to the request
     */
    public function logout(Request $request)
    {
        // Get the user
        $user = $this->guard()->user();

        // If the user exists, unset the API token and save the user
        if ($user) {
            $user->api_token = null;
            $user->save();
        }

        // Return a response
        return response()->json(['data' => 'User logged out.'], 200);
    }
    }
