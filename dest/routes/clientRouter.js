"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientController_1 = require("../controller/clientController");
const clientRouter = express_1.default.Router();
clientRouter.route("/client").get(clientController_1.getClients).post(clientController_1.createClient).delete();
clientRouter.route("/client/:id").get(clientController_1.getClientById).put(clientController_1.updateClient).delete();
// clientRouter.get("/client", (req, res) => {
//     res.send("From client");
// });
// clientRouter.get("/client/:id", (req, res) => {
//     res.send("Client of id: " + req.params.id);
// });
// clientRouter.post("/client", (req, res) => {
//     res.send("Client POST request");
// });
// clientRouter.put("/client/:id", (req, res) => {
//     res.send("Client PUT request of id: " + req.params.id);
// });
// clientRouter.delete("/client/:id", (req, res) => {
//     res.send("Client DELETE request of id: " + req.params.id);
// });
exports.default = clientRouter;
