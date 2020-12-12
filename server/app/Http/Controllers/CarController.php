<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Car;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Car::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'company' => 'required',
            'type' => 'required',
            'color' => 'required'
        ]);
        if(count($validated->errors()) > 0){
            return json_encode(array('error' => $validated->errors() ));
        }
        //create Car
        $car = new Car;
        $car->company = $request->input('company');
        $car->type = $request->input('type');
        $car->color = $request->input('color');
        $saved = $car->save();
        if(!$saved){
            return json_encode(array('error' => 'Error in saving data'));
        }
        else{
            return Car::all();
        }
      
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $car = Car::find($id);
        if(!$car){
            return json_encode(array('error' => 'Id dose not exist'));
        }
        else return $car;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $car = Car::find($id);
        if(!$car){
            return json_encode(array('error' => 'Id dose not exist'));
        }
        if($request->input('company')){
            $car->company = $request->input('company');
        }
        if($request->input('type')){
            $car->type = $request->input('type');
        }
        if($request->input('color')){
            $car->color = $request->input('color');
        }
        $saved = $car->save();
        if(!$saved){
            return json_encode(array('error' => 'Error in saving data'));
        }
        else{
            return Car::all();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Car::find($id);
        if(!$car){
            return json_encode(array('error' => 'Id dose not exist'));
        }
        else{
            $car->delete();
            return Car::all();
        }
    }
}
