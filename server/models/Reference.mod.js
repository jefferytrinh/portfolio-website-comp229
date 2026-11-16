import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  testimonial: String,
  position: String,
  company: String
});

export default mongoose.model("Reference", schema);