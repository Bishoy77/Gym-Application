import { Request, Response } from "express";
import {Meal} from "../models/mealModel";

export const createMeal = async (req: Request, res: Response) => {
  try {
    const { name, ingredients } = req.body;
    const newMeal = new Meal({ name, ingredients });
    await newMeal.save();
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(500).json({ error: "Failed to create meal" });
  }
};

export const getMeals = async (_req: Request, res: Response) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: "Failed to get meals" });
  }
};

export const getMealById = async (req: Request, res: Response) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ error: "Failed to get meal" });
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ error: "Failed to update meal" });
  }
};
