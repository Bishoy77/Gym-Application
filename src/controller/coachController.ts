import {Request, Response} from "express";
import {Coach} from "../models/coachModel";

export const createCoach = async (req: Request, res: Response): Promise<void> => {
    try {
      const coach = await Coach.create(req.body);
      res.status(201).json(coach);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
};

export const getCoaches = async(req: Request, res: Response): Promise<void> => {
    try {
        const coaches = await Coach.find().populate("coachId");
        res.json(coaches);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
}

export const getCoachById = async (req: Request, res: Response): Promise <void> => {
    try {
      const coach = await Coach.findById(req.params.id).populate("coachId");
      if (!coach) {
        res.status(404).json({ message: "coach not found" });
        return;
      }
      res.json(coach);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
};

export const updateCoach = async (req: Request, res: Response):Promise<void> => {
try {
    const coach = await Coach.findByIdAndUpdate(req.params._id, req.body, { new: true });
    if (!coach) {
        res.status(404).json({ message: "coach not found" });
        return;
    }
    res.json(coach);
} catch (error) {
    res.status(500).json({ error: (error as Error).message });
}
};
