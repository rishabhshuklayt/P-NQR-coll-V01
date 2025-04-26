import adminSchema from "../../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const adminRegister = async (req, res) => {
  try {
    const { email, password } = await req.body;
    console.log(email);
    if (!email || !password) {
      return res.status(404).json({ message: "Missing Fields Detected" });
    }
    const isadmin = await adminSchema.findOne({ email });
    if (isadmin) {
      return res
        .status(404)
        .json({ message: "Email is already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await adminSchema.create({
      email,
      password: hashedPassword,
    });
    return res.status(200).json({ message: "Admin created successfuly" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "some error occured",
      success: false,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "Missing Fields Detected" });
    }
    const admin = await adminSchema.findOne({ email });
    // console.log(admin);
    if (!admin) {
      return res
        .status(404)
        .json({ message: "Email is invalid", success: false });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    // console.log(isMatch);
    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "Password is invalid", success: false });
    }
    // Generate token
    const token = await jwt.sign({ id: admin._id }, "jdhfjsdhfsldhfdshf", {
      expiresIn: "1d",
    });
    // console.log(token);
    res.cookie("token", token);

    return res.status(200).json({ message: "Login successful", success: true });
  } catch (error) {}
};
