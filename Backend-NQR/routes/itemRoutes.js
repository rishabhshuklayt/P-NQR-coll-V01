import express from "express";
import authUser from "../config/authMIddleware.js";
import { addItem, deleteItem } from "../controllers/adminControllers/adminItem/addItem.js";
const router = express.Router();
router.post("/register", addItem);
router.delete("/delete/:id",deleteItem)
export default router;
