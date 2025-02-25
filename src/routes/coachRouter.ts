import express from "express";
import { getCoaches, getCoachById, createCoach, updateCoach } from "../controller/coachController";

const coachRouter = express.Router();

coachRouter.route("/")
            .get(getCoaches)
            .post(createCoach)

coachRouter.route("/:id")
            .get(getCoachById)
            .patch(updateCoach)

export default coachRouter;