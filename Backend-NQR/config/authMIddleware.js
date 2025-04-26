import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";

const authUser = async (req, res, next) => {
  const authHeader = req.cookie.token;

  // Extract the token
  const token = authHeader;

  if (!token) {
    return res.status(400).json({ message: "Token is not he", success: false });
  }
  let user = jwt.verify(token, process.env.SECRET_KEY);

  if (!user) {
    res.status(400).json({ message: "Token not found", success: false });
  }
  req.user = user._id;

  next();
};

export default authUser;
