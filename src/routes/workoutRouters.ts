import express from "express";
import {getWorkouts, createWorkout, updateWorkout, deleteWorkout} from "../controller/workoutController"
const workoutRouter = express.Router();

workoutRouter.route("/")
            .get(getWorkouts)
            .post(createWorkout);

workoutRouter.route("/:id")
            .patch(updateWorkout)
            .delete(deleteWorkout);

export default workoutRouter;