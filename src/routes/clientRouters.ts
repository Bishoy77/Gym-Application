import express from "express";
import { getClientById, createClient, updateClient, getClients} from "../controller/clientController"

const clientRouter = express.Router();

clientRouter.route("/")
            .get(getClients)
            .post(createClient)

clientRouter.route("/:id")
            .get(getClientById)
            .patch(updateClient)


export default clientRouter;