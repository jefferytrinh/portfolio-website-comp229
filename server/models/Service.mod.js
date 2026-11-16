import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  description: String
});

export default mongoose.model("Service", schema);