import mongoose, { Types } from 'mongoose'; 
import { IMeal } from '../types/mealTypes';
const mealSchema = new mongoose.Schema<IMeal>({
    name: String,
    ingredients: [String],
    
});
export const Meal = mongoose.model('Meal', mealSchema);