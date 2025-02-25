export interface IWorkout {
    id: Number;
    name: String;
    exercises: { name: String, sets: Number, reps: Number }[];
}