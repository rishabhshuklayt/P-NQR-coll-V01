import mongoose from "mongoose";
export default mongoose
  .connect("mongodb://localhost:27017/NQR_Restraunt")
  .then(() => {
    console.log("Database Connection Eastablished Succesfully");
  })
  .catch((err) => {
    console.log("Failed To Establish Database Connection ");
  });
