<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/* Add */
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'email',
        'role',
        'password',
        'name',
        'phone',
        'profile_path',
        'signature_path',

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * การกระทำต่อ user ในครั้งแรก
     * @param string $value
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */

     public function getRoleAttribute($value)
    {
        $roles = [
            1 => 'member',
            2 => 'admin',
        ];

        return $roles[$value] ?? 'unknown';
    }


    public function role_permissions()
    {
        return $this->hasOne(UserPermission::class, "user_id");
    }




}
