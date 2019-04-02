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

        $this->calculateLevel($user);

        return $next($request);
    }

    protected function calculateXpForLevel($level)
    {
      // Algorithm for calculating xp required

      $multiplier = 1;

      $xpRequired = pow(($level * 4), 2.1) + 81.621;
      $xpRequired = round($xpRequired * $multiplier);

      return($xpRequired);
    }

    protected function calculateLevel(User $user) {
      $hasLevelUpped = false;

      // Calculate XP needed
      $userdata = json_decode($user->data, true);

      // Get the current level and xp
      $currentXp = $userdata['xp'];
      $currentLvl = $userdata['level'];

      // Calculate the xp required
      $xpRequired = $this->calculateXpForLevel($currentLvl + 1);
      $userdata['xp_required'] = $xpRequired;
      $userdata['xp_currentLvl'] = $this->calculateXpForLevel($currentLvl);

      // if the current xp is higher than the xp required, levelup and calculate new xp.
      if ($currentXp >= $xpRequired) {
        $hasLevelUpped = true;
        $userdata['level'] = $currentLvl + 1;
        $userdata['xp_required'] = $this->calculateXpForLevel($userdata['level'] + 1);
        $userdata['xp_currentLvl'] = $this->calculateXpForLevel($userdata['level']);

      }

      // Save the data to the user
      $user->data = \json_encode($userdata);
      $user->save();
      if ($hasLevelUpped) {
        $user->onLevelUp();
      }

      return true;
    }
}
