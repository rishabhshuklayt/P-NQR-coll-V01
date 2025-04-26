//  **Using Common-JS**

// Logger
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Mongoose from "./config/mongoose.js";
const app = express();
//Route
import UserAuthRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
const PORT = 3000 || process.env.PORT;

// app.use(morgan("dev"));
// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data (if using form data)
app.use(express.urlencoded({ extended: true }));
app.use("/api", UserAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/item", itemRoutes);

// Index Routes For test
app.get("/", (req, res) => {
  res.send("hello world"); // send to server
});

// Universal 404 Error Handler
app.get("*", (req, res) => {
  res.send(
    "Hello Developer , The Route You Are Looking For Is Not defined in the System"
  );
});
// Unviersal Error Handling Middleware
app.get((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
