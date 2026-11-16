import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  created: Date,
  updated: Date,

  username: String,
  role: String
});

export default mongoose.model("User", schema);