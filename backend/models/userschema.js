import mongoose from "mongoose";
const Schema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
    created: { type: Date, default: Date.now }
  },
);
Schema.index({ email: 1 }, { unique: true });
module.exports = mongoose.model("users", Schema);