import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import createError from "http-errors";

import { connectToMongoDB } from "./db.js";

import referenceRoutes from "./routes/reference.rou.js";
import projectRoutes from "./routes/project.rou.js";
import serviceRoutes from "./routes/service.rou.js";
import userRoutes from "./routes/user.rou.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend API is running."
  });
});

app.use("/api/references", referenceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
