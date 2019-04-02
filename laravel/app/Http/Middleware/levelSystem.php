<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

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
        $userdata = json_decode($user->data, true);

        // Calculate XP needed

        $currentXp = $userdata['xp'];
        $currentLvl = $userdata['level'];
        $xpRequired = $this->calculateXpForNextLevel($currentLvl);
        $userdata['xp_required'] = $xpRequired;

        if ($currentXp >= $xpRequired) {
          $userdata['level'] = $currentLvl + 1;
          $userdata['xp_required'] = $this->calculateXpForNextLevel($userdata['level']);
        }

        $user->data = \json_encode($userdata);
        $user->save();

        return $next($request);
    }

    protected function calculateXpForNextLevel($currentLvl)
    {
      // Algorithm for calculating xp required

      $nextLvl = $currentLvl + 1;

      $multiplier = 1;

      $xpRequired = pow(($nextLvl * 4), 2.1) + 81.621;
      $xpRequired = round($xpRequired * $multiplier);

      return($xpRequired);
    }
}
