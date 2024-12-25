import express from "express";
import { getClientById, createClient, updateClient} from "../controller/clientController"

const clientRouter = express.Router();
clientRouter.route("/")
            .post(createClient)

clientRouter.route("/:id")
            .get(getClientById)
            .patch(updateClient)


export default clientRouter;