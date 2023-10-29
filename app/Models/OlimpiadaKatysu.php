<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OlimpiadaKatysu extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'o_katysu';
    protected $primaryKey = "idd";
    public $timestamps = false;

    public function bagyty() {
        return $this->belongsTo(OlimpiadaBagyty::class, 'o_bagyty_idd');
    }

    public function o_tury() {
        return $this->belongsTo(OlimpiadaTury::class, 'o_tury_idd', 'idd');
    }

    public function o_bagyt() {
        return $this->belongsTo(OlimpiadaBagyty::class, 'o_bagyty_idd', 'idd');
    }

    public function o_tizim() {
        return $this->hasOne(OlimpiadaTizim::class, 'o_order_id', 'o_order_id');
    }
    public function o_zhetekshi() {
        return $this->belongsTo(OlimpiadaZhetekshi::class, 'o_zhetekshi_id');
    }
    public function o_katysushy()
    {
        return $this->belongsTo(OlimpiadaKatysushy::class, 'o_katysushy_idd');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    



}
