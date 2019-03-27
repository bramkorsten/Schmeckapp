<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Story;

class StoryController extends Controller
{
  public function index()
  {
    return Story::all();
  }

  public function show(Story $story)
  {
    return $story;
  }

  public function store(Request $request) {
    $story = Story::create($request->all());
    return response()->json($story, 201);
  }

  public function update(Request $request, Story $story) {
    $story->update($request->all());

    return response()->json($story, 200);
  }

  public function delete(Request $request, Story $story) {
    $story->delete();

    return response()->json(null, 200);
  }
}
