import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import jsend from "jsend";
import dotenv from "dotenv";


import clientRouter from "./routes/clientRouters";
import workoutRouter from "./routes/workoutRouters";
import  coachRouter from "./routes/coachRouter";
import mealRouter from "./routes/mealRouter";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(jsend.middleware);

app.use("/client", clientRouter);
app.use("/workout", workoutRouter);
app.use("/coach", coachRouter);
app.use("/meal", mealRouter);

const PORT = process.env.PORT;


const connectDB = async() => {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log("MongoDB Connected Successfully");
    } catch (error) {
      console.error("MongoDB Connection Failed:", error);
    }
}


connectDB();

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
})
