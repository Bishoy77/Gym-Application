import mongoose from "mongoose";
import { IWorkout } from '../types/workoutTypes'

const workoutSchema = new mongoose.Schema<IWorkout>({
    name: {type:String, required: true},
    exercises: [{ 
        name: { type: String, required: true },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true }
    }]
})
export const Workout = mongoose.model('Workout', workoutSchema);