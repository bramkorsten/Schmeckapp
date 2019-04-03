<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'unique_id', 'first_name', 'last_name', 'email', 'password', 'img',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function generateToken()
    {
      $this->api_token = str_random(60);
      $this->save();

      return $this->api_token;
    }

    public function generateBaseData()
    {
      $data = array(
        'level' => 1,
        'schmeckels' => 100,
        'achievements' => array(),
        'xp' => 100,
        'xp_currentLvl' => 100,
        'rewards' => array(),
        'notifications' => array()
      );

      $this->data = \json_encode($data);
      $this->save();

      return $this->data;
    }

    public function onLevelUp() {
      // This function runs when the user levelups. This is calculated by the calculateLevel() function
      $this->addSchmeckels();
    }

    public function addSchmeckels() {
      $userdata = json_decode($this->data, true);

      // Calculate the amount of schmeckels to be added to the user
      $schmeckels = pow($userdata['level'], 1.5) + 9;
      $schmeckels = round($schmeckels);

      $userdata['schmeckels'] = $userdata['schmeckels'] + $schmeckels;

      $this->data = json_encode($userdata);
      $this->save();
    }

    public function addDayWorked() {
      $userdata = json_decode($this->data, true);
      $level = $userdata['level'];
      $xpGained = pow($level, 2) + 100;
      $userdata['xp'] = $userdata['xp'] + $xpGained;
      $this->data = json_encode($userdata);
      $this->save();
      $this->calculateLevel();
      return($this);
    }

    public function isAdmin()
    {
      if ($this->type === 2) {
        return true;
      }
      return false;
    }

    protected function calculateXpForLevel($level)
    {
      // Algorithm for calculating xp required

      $multiplier = 1;

      $xpRequired = pow(($level * 4), 2.1) + 81.621;
      $xpRequired = round($xpRequired * $multiplier);

      return($xpRequired);
    }

    protected function calculateLevel() {
      $hasLevelUpped = false;

      // Calculate XP needed
      $userdata = json_decode($this->data, true);

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
      $this->data = \json_encode($userdata);
      $this->save();
      if ($hasLevelUpped) {
        $this->onLevelUp();
      }

      return true;
    }
}
