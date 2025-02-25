import mongoose from "mongoose";

export interface ICoach {
    id: Number;
    name: String;
    experience: Number;
    clients: mongoose.Schema.Types.ObjectId[];
    workouts: mongoose.Schema.Types.ObjectId[];
}