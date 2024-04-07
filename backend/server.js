import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/locationRoutes.js";
import cors from "cors"; 

dotenv.config();

const port = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));
