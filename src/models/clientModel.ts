import mongoose from 'mongoose';
import { IClient } from '../types/clientTypes'
const clientSchema = new mongoose.Schema<IClient>({
    id: {type:Number, required: true, unique: true},
    name: {type:String, required: true},
    
    coachId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
    dietPlan: {meals:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }]},
    workoutPlan: {workouts:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }]}   
});
export const Client = mongoose.model('Client', clientSchema);