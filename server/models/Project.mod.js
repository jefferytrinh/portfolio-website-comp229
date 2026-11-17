import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
  completion: Date
});

export default mongoose.model("Project", projectSchema);