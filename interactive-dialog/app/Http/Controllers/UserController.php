<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function datauser(){
        $dataUser = User::paginate(5);
        return view ('datauser', compact('dataUser'));
    }

    public function hapususer($id)
    {
        User::destroy($id);
        return response()->json(['status' => 'success', 'message' => 'User berhasil dihapus']);
    }
}
