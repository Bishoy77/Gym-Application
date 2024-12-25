import {Request, Response} from "express";
import jsend from "jsend";
import {clients} from "../data/clientDatabase";

export const getClientById = (req: Request, res: Response) => {
    const id: Number = +req.params.id;
    const client = clients.find(client=>client.id === id);
    if (client) {
        res.status(200).json({data: client});
    }
    else {
        res.status(404).json(jsend.fail({ message: "Client not found" }));
    }
}
export const createClient = (req: Request, res: Response) => {
    const {name, coachId, dietPlan} = req.body;
    const newClient = {id: clients.length + 1, name, coachId, dietPlan};
    clients.push(newClient);
    res.status(201).json(jsend.success(newClient));
}
export const updateClient = (req: Request, res: Response) => {
    const id: Number = +req.params.id;
    const {name, coachId, dietPlan} = req.body;
    const client = clients.find(client=>client.id === id);
    if (client) {
        name ? client.name = name : req.body.name;
        coachId ? client.coachId = coachId : req.body.coachId;
        dietPlan ? client.dietPlan = dietPlan : req.body.dietPlan;
        res.status(200).json(jsend.success(client));
    }
    else {
        res.status(404).json(jsend.fail({ message: "Client not found" }));
    }
}
