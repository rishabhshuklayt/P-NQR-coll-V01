import express from "express";

import {
  adminRegister,
  adminLogin,
} from "../controllers/adminControllers/admin.js";
let router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);
export default router;
