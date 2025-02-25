import mongoose from "mongoose";
import { ICoach } from '../types/coachTypes'

const coachSchema = new mongoose.Schema<ICoach>({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    experience: {type: Number, required: true},
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref:'Client' }],
    workouts: [{ type: mongoose.Schema.Types.ObjectId, ref:'Workout' }]
})
export const Coach = mongoose.model('Coach', coachSchema);