import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  completion: Date,
  description: String,
  image: String
});

export default mongoose.model("Project", schema);