import express from "express";

import {
  addService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} from "../controllers/service.con.js";

const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", addService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;