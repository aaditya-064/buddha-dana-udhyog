import express from "express";
import {
  getUser,
  registerUser,
  logUser,
  changePassword,
} from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", logUser);
router.post("/get-user-private", getUser);

export default router;
