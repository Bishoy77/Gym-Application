import mongoose from "mongoose";

export interface IClient {
    id: Number;
    name: String;
    coachId: Number;
    dietPlan: { meals: mongoose.Schema.Types.ObjectId[] };
    workoutPlan: { workouts: mongoose.Schema.Types.ObjectId[] };
}