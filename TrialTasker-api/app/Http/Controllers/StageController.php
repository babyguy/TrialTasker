<?php

namespace App\Http\Controllers;

use App\Models\Stage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():JsonResponse
    {
        $stage = Stage::orderBy('id', 'desc')->paginate(10);
        $stage->load('stage_type_stage','stage_case');
        return response()->json($stage);
    }

    public function all():JsonResponse
    {
        $stage = Stage::all();
        $stage->load('stage_type_stage','stage_case');
        return response()->json($stage);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'stage_name'=>['required','string'],
                'stage_notes'=>['nullable','string'],
                'stage_case_id'=>['required','integer'],
                'stage_type_stage_id'=>['required','integer'],
            ]);

            $stage = Stage::create([
                'stage_name'=> $request->stage_name,
                'stage_notes'=> $request->stage_notes,
                'stage_case_id'=> $request->stage_case_id,
                'stage_type_stage_id'=> $request->stage_type_stage_id,
            ]);
            return response()->json(['message' => 'Etapa creada correctamente'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $stage = Stage::findOrFail($id);
        $stage->load('stage_type_stage','stage_case');
        return response()->json($stage);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id):JsonResponse
    {
        try {
            $stage = Stage::findOrFail($id);

            $request->validate([
                'stage_name'=>['required','string'],
                'stage_notes'=>['nullable','string'],
                'stage_case_id'=>['required','integer'],
                'stage_type_stage_id'=>['required','integer'],
            ]);

            Stage::find($id)->update([
                'stage_name'=> $request->stage_name,
                'stage_notes'=> $request->stage_notes,
                'stage_case_id'=> $request->stage_case_id,
                'stage_type_stage_id'=> $request->stage_type_stage_id,
            ]);

            return response()->json(['message' => 'Etapa actualizada correctamente'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(["errors" => $e->errors()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id):JsonResponse
    {
        Stage::find($id)->delete();
        return response()->json(['message' => 'Etapa eliminada exitosamente'], 201);
    }
        // consultas de usuario logueado

        public function stageCase(string $id): JsonResponse
        {
            $stageCase = Stage::where('stage_case_id', $id)->get();
            // $stageCase->load('stage_type_stage','stage_case');
            return response()->json($stageCase);
        }
}
