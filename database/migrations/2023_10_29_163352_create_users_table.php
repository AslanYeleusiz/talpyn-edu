<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('real_password');
            $table->string('username');
            $table->string('s_name');
            $table->string('l_name')->nullable();
            $table->string('fio');
            $table->date('birthday')->nullable();
            $table->string('tel_num')->unique();
            $table->integer('balance')->default(0);
            $table->integer('pol_id');
            $table->string('img1')->nullable();
            $table->integer('status')->default(0);
            $table->integer('admin')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
