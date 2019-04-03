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

    /**
     * Generate a unique API token for the user.
     * Called in Auth\RegisterController and Auth\LoginController
     * @return String $api_token
     */
    public function generateToken()
    {
      $this->api_token = str_random(60);
      $this->save();

      return $this->api_token;
    }

    /**
     * Generate the base data for a new user.
     * This is de default "profile" a user will start with
     * @return Array $data
     */
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

    /**
     * This function runs every time a user levelups.
     * This is calculated by the User::calculateLevel() function
     * and called on every request by the Middleware\levelSystem Class.
     * @return boolean
     */
    public function onLevelUp() {
      $this->addSchmeckels();
      return true;
    }

    /**
     * Add schmeckels based on the level of the user.
     * The calculation user is (level ^ 1.5) + 9.
     */
    public function addSchmeckels() {
      $userdata = json_decode($this->data, true);

      // Calculate the amount of schmeckels to be added to the user
      $schmeckels = pow($userdata['level'], 1.5) + 9;
      $schmeckels = round($schmeckels);

      // Add them to the current ammount
      $userdata['schmeckels'] = $userdata['schmeckels'] + $schmeckels;

      // jsonEncode the data and save the user
      $this->data = json_encode($userdata);
      $this->save();
    }

    /**
     * This function runs when App\CycleController wants to add a workday to the user.
     * The algorithm used here is (level ^ 2) + 100
     * @return User Current user
     */
    public function addDayWorked() {
      $userdata = json_decode($this->data, true);

      // Get the level of the user
      $level = $userdata['level'];

      // Calculate the xp the user has gained, and add it
      $xpGained = pow($level, 2) + 100;
      $userdata['xp'] = $userdata['xp'] + $xpGained;
      $this->data = json_encode($userdata);

      // Save the user and recalculate the current level.
      $this->save();
      $this->calculateLevel();

      // return the current user
      return($this);
    }

    /**
     * User function to check if the user is an admin.
     * Uses the 'type' property in the database
     * @return boolean isAdmin
     */
    public function isAdmin()
    {
      if ($this->type === 2) {
        return true;
      }
      return false;
    }

    /**
     * Function to calculate the xp needed for a certain level
     * Uses the following algorithm: ((level * 4) ^ 2.1) + 81.621
     * This means level 1 is 100xp.
     * @param  integer $level the level to calculate xp for
     * @return integer        the xp required for this level
     */
    protected function calculateXpForLevel($level)
    {
      // Added a multiplier to make getting the XP easier or harder
      $multiplier = 1;

      // The algorithm for calculating the xp
      $xpRequired = pow(($level * 4), 2.1) + 81.621;
      $xpRequired = round($xpRequired * $multiplier);

      return($xpRequired);
    }

    /**
     * This function is called by multiple systems to update the current level of a user.
     * It is called on every request by the Middleware\levelSystem Class,
     * but can be called whenever needed. Should be called whenever XP is added to the user.
     * @return boolean
     */
    public function calculateLevel() {
      $hasLevelUpped = false;

      // Get the user's data
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
