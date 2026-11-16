import express from "express";

import {
  addProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} from "../controllers/project.con.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", addProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;