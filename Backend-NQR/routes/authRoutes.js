import express from "express";
const router = express.Router();

import { registerUserController } from "../controllers/UserControllers/user.auth.controller.js";

router.post("/register", registerUserController);

export default router;
