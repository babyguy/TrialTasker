<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Caso;
use App\Models\File;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypePerson;
use App\Models\Person;
use App\Models\PersonStage;
use App\Models\Stage;
use App\Models\TypeStage;
use App\Models\PlataformUsageRegister;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'is_admin' => true,
        ]);
        $this->call([
            TypePersonSeeder::class,
        ]);
        User::factory(20)->create();
        TypePerson::factory(20)->create();
        Person::factory(20)->create();
        Caso::factory(10)->create();
        TypeStage::factory(6)->create();
        Stage::factory(10)->create();
        PersonStage::factory(10)->create();
        File::factory(20)->create();

        // crea registros de una semana hasta hoy para la tabla PlataformUsageRegister
        $start = Carbon::now()->subDays(7)->format('Y-m-d');
        $end = Carbon::now()->format('Y-m-d');
        
        for ($date = $start; $date <= $end; $date++) {
            PlataformUsageRegister::factory()->create([
                'date' => $date,
                'users_count' => rand(0, 100),
            ]);
        }
    }
    
}
