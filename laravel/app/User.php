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
      $userdata = json_decode($this->data, true);
      
      $this->addSchmeckels($userdata);

    }

    public function addSchmeckels($userdata) {

      // Calculate the amount of schmeckels to be added to the user
      $schmeckels = pow($userdata['level'], 1.5) + 9;
      $schmeckels = round($schmeckels);

      $userdata['schmeckels'] = $userdata['schmeckels'] + $schmeckels;

      $this->data = json_encode($userdata);
      $this->save();
    }
}
