import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,

  },
  { timestamps: true }
);

export default mongoose.models["User"] || mongoose.model("User", userSchema, "users");