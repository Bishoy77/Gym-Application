import express from "express";
import cors from "cors";
import morgan from "morgan";
import jsend from "jsend";
import dotenv from "dotenv";

import clientRouter from "./routes/clientRouters";
import workoutRouter from "./routes/workoutRouters";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(jsend.middleware);

app.use("/client", clientRouter);
app.use("/workout", workoutRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port 300")
})
