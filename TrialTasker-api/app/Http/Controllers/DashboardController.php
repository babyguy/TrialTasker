<?php

namespace App\Http\Controllers;

use App\Models\PlataformUsageRegister;
use App\Models\Session;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getUsersForWeek(): JsonResponse
    {
        $start = Carbon::now()->subDays(7)->format('Y-m-d');
        $end = Carbon::now()->format('Y-m-d');
        $sessions = PlataformUsageRegister::whereBetween('date', [$start, $end])->get();
        return response()->json($sessions);

    }

    public function getSessions(): JsonResponse
    {
        $sessions = Session::where('last_activity', '>=', now()->subMinutes(config('session.lifetime')))->where('user_id', '!=', null)->get()->unique('user_id')->count();
        return response()->json($sessions);
    }
}
