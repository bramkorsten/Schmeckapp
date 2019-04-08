<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\User;


/**
 * This class handles the levelsystem of the app.
 * It is called before almost every request
 */
class levelSystem
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Get the current user from the Auth guard
        $user = Auth::guard('api')->user();

        // Run the User::calculateLevel() function for this user
        $user->calculateLevel();

        // Continue the request
        return $next($request);
    }
}
