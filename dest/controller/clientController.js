"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.createClient = exports.getClientById = exports.getClients = void 0;
const getClients = (req, res) => {
    res.send("From client");
};
exports.getClients = getClients;
const getClientById = (req, res) => {
    res.send("Client of ID: " + req.params.id);
};
exports.getClientById = getClientById;
const createClient = (req, res) => {
    res.send("Client have been created");
};
exports.createClient = createClient;
const updateClient = (req, res) => {
    res.send("Client of ID: " + req.params.id);
};
exports.updateClient = updateClient;
