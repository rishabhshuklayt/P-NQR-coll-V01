import UserModel from "../../models/user.models.js";
export const registerUserController = async (req, res, next) => {
  try {
    console.log("nter in the registered routes");
    const { fullname, phone, email } = req.body;

    if (!fullname || !phone || !email) {
      return res.status(301).json({ message: "Missing Fields detected" });
    }
    // Model save

    const newUser = UserModel({
      fullname,
      phone,
      email,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User Registered Succefully", success: true });
  } catch (err) {
    next(err);
  }
};
export const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "Missing Fields Detected" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Email is invalid", success: false });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "Password is invalid", success: false });
    }
    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token);

    return res.status(200).json({ message: "Login successful", success: true });
  } catch (error) {}
};
