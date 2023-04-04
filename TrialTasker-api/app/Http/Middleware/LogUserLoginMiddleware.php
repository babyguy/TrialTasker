<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use App\Models\PlataformUsageRegister;

class LogUserLoginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $now = Carbon::now();
        $date = $now->format('Y-m-d');
        $midnight = $now->copy()->endOfDay();
        $expiration = $midnight->addDay();

        $user = Auth::user();
        $loggedUsers = Cache::get($date.'_logged_users', []);
        if (!in_array($user->id, $loggedUsers)) {
            array_push($loggedUsers, $user->id);
            Cache::put($date.'_logged_users', $loggedUsers, $expiration);

            $register = PlataformUsageRegister::where('date', $date)->first();
            if ($register) {
                $register->increment('users_count', 1);
            } else {
                PlataformUsageRegister::create([
                    'date' => $date,
                    'users_count' => 1
                ]);
            }
        }

        return $next($request);
    }
}
