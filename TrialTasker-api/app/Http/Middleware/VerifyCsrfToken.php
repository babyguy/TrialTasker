<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
use Symfony\Component\CssSelector\Node\FunctionNode;

class VerifyCsrfToken extends Middleware
{
  
    public function handle($request,\Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin','*');
        $response->header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');

        return $response;
    }

}
