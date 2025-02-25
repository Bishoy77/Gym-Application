import {Request, Response} from "express";
import { Workout } from "../models/workoutModel";

export const createWorkout = async (req: Request, res: Response) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(workout);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
export const getWorkouts = async (req: Request, res: Response) => {
    try {
        const workouts = await Workout.find().populate("clientId");
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
export const updateWorkout = async (req: Request, res: Response): Promise<void> => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!workout) {
            res.status(404).json({ message: "Workout not found" });
            return;
        }
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}

export const deleteWorkout = async (req: Request, res: Response): Promise<void> => {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout){
            res.status(404).json({ message: "Workout not found" });
            return;
        }    
        res.json({ message: "Workout deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}