import {Request, Response} from "express";
import jsend from "jsend";
import { Client } from "../models/clientModel";
import { Coach } from "../models/coachModel";
import { Meal } from "../models/mealModel";
export const createClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const client = await Client.create(req.body);
      if (req.body.coachId) {
        const coach = await Coach.findById(req.body.coachId);
        if (!coach) {
            res.status(404).json({ message: "Coach not found" });
            return;
        }
        coach.clients.push(client._id as any);
        await coach.save();
      }
      res.status(201).json(client);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
};
export const getClients = async(req: Request, res: Response): Promise<void> => {
    try {
        const clients = await Client.find().populate({path: "coachId", select: "name"})
        .populate({path: "dietPlan", populate: {path: "meals",select: "name -_id"}});
        res.json(clients);
      } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
}
export const getClientById = async (req: Request, res: Response): Promise <void> => {
    try {
      const client = await Client.findById(req.params.id).populate({path: "coachId", select: "name"})
        .populate({path: "dietPlan", populate: {path: "meals",select: "name -_id"}});
      if (!client) {
        res.status(404).json({ message: "Client not found" });
        return;
      }
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
};
export const updateClient = async (req: Request, res: Response):Promise<void> => {
try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!client) {
        res.status(404).json({ message: "Client not found" });
        return;
    }
    if (req.body.coachId) {
        const coach = await Coach
            .findById(req.body.coachId)
        if (!coach) {
            res.status(404).json({ message: "Coach not found" });
            return;
        }
        coach.clients.push(client._id as any);
        await coach.save();
    }
    res.json(client);
} catch (error) {
    res.status(500).json({ error: (error as Error).message });
}
};
