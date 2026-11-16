import express from "express";

import {
  addReference,
  getReferences,
  getReferenceById,
  updateReference,
  deleteReference
} from "../controllers/reference.con.js";

const router = express.Router();

router.get("/", getReferences);
router.get("/:id", getReferenceById);
router.post("/", addReference);
router.put("/:id", updateReference);
router.delete("/:id", deleteReference);

export default router;