import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});