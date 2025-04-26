import mongoose from "mongoose";
let UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

export default mongoose.model("User", UserSchema);
