<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OlimpiadaZhetekshi extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'o_zhetekshi';
    public $timestamps = false;

    public function o_katysu() {
        return $this->hasOne(OlimpiadaKatysu::class, 'o_zhetekshi_id');
    }
    public function o_bagyt(){
        return $this->belongsTo(OlimpiadaBagyty::class, 'o_bagyty_idd');
    }
    public function qatysushylar(){
        return $this->hasMany(OlimpiadaKatysu::class, 'o_zhetekshi_id');
    }
    

}
