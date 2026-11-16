import express from "express";

import {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.con.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;