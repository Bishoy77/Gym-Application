import {Request, Response} from "express";
import {workouts} from "../data/workoutDatabase";
import jsend from "jsend";

export const getWorkouts = (req: Request, res: Response) => {
    res.json(workouts);
}
export const createWorkout = (req: Request, res: Response) => {
    
    // workouts.push(req.body);
    const {name, difficulty} = req.body;
    const newWorkout = {id: workouts.length + 1, name, difficulty};

    workouts.push(newWorkout);
    res.status(201).json(jsend.success(newWorkout));

}
export const updateWorkout = (req: Request, res: Response) => {
    const id: Number = +req.params.id;
    const workout = workouts.find(workout=>workout.id === id);
    if (workout) {
        workout.name = req.body.name;
        workout.difficulty = req.body.difficulty;
        res.status(200).json(jsend.success(workout));
    } else {
        res.status(404).json(jsend.error({message: "Workout not found"}));
    }
}
export const deleteWorkout = (req: Request, res: Response) => {
    const id: Number = +req.params.id;
    const index = workouts.findIndex(workout=>workout.id === id);
    if (index !== -1){
        workouts.splice(index, 1);
        res.status(204).json(jsend.success({message: "Workout deleted"}));
    }else {
        res.status(404).json(jsend.fail({message: "Workout not found"}));
    }
    
}
