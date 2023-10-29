<?php

namespace App\Services\V1\Olimpiada;

use Illuminate\Support\Facades\Auth;
use App\Models\OlimpiadaKatysu;
use App\Models\OlimpiadaTury;
use App\Models\OlimpiadaZhetekshi;
use Carbon\Carbon;
/**
 * Class OlimpiadaKatysuService.
 */
class OlimpiadaKatysuService
{
    public function handle($katysushy, $request)
    {
        $user = Auth::guard('api')->user();
        $now = Carbon::now();
        $class = $request->class;
        $katysushy_id = $request->katysushy_id;
        $katysushy->o_katysushy_idd = $katysushy_id;
        $katysushy->o_turnir_idd = $now->format('n');
        $katysushy->o_bagyty_idd = $request->bagyt_id;
        $o_tury = OlimpiadaTury::where('o_bagyty_idd',$request->bagyt_id)
            ->orderByDesc('idd')
            ->when($class, function($query) use ($class) {
                if(!empty($class)){
                    return $query->where('synyp', $class);
                }else{
                    return;
                }
            })->firstOrFail();
        $katysushy->o_mekeme = $request->o_mekeme;
        if($request->zhetekshi) {
            $zhetekshi = OlimpiadaZhetekshi::where('name', $request->zhetekshi)->first();
            if($zhetekshi) $katysushy->o_zhetekshi_id = $zhetekshi->id;
            else {
                $zhetekshi = OlimpiadaZhetekshi::create([
                    'user_id' => $user->id,
                    'o_bagyty_idd' => $request->bagyt_id,
                    'o_turnir_idd' => $now->format('n'),
                    'name' => $request->zhetekshi,
                    'date' => $now
                ]);
                $katysushy->o_zhetekshi_id = $zhetekshi->id;
            }
        }
        $katysushy->o_tury_idd = $o_tury->idd;
        $katysushy->o_katysushy_fio = $request->name.' '.$request->fname;
        $katysushy->o_katysushy_name = $request->name;
        $katysushy->o_katysushy_fname = $request->fname;
        $katysushy->user_id = $user->id;
        $katysushy->o_date = $now->format('Y-m-d');
        $katysushy->o_sany = 1;
        $katysushy->o_order_id = strtotime($now).''.rand(0,9);
        $katysushy->obwcode = $katysushy->o_order_id%1000 . $user->id%1000 . rand(10,99);
        $chec = OlimpiadaKatysu::where('obwcode', $katysushy->obwcode)->first();
        while($chec){
            $katysushy->obwcode = $katysushy->o_order_id%1000 . $user->id%1000 . rand(10,99);
            $chec = OlimpiadaKatysu::where('obwcode', $katysushy->obwcode)->first();
        }
        $katysushy->price = 500 + 200*($request->type_id - 1);
        $katysushy->success = null;
        $katysushy->update_count = 3;
        $katysushy->o_oblis = $request->type_id;
        $katysushy->o_skidka = ($katysushy->price/10);
        $katysushy->oblysy = 0;
        return $katysushy;
    }

    public function save($katysushy, $request)
    {
        $katysushy = $this->handle($katysushy, $request);
        return $katysushy->save();
    }
}
