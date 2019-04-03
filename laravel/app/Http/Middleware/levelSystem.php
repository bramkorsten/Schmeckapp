<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\User;

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
        $user = Auth::guard('api')->user();

        $user->calculateLevel();

        return $next($request);
    }
}
