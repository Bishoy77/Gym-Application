import express from "express";
import { getMeals, createMeal, getMealById, updateMeal } from "../controller/mealsController";

const coachRouter = express.Router();

coachRouter.route("/")
            .get(getMeals)
            .post(createMeal)

coachRouter.route("/:id")
            .get(getMealById)
            .patch(updateMeal)

export default coachRouter;