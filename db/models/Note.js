import mongoose from "mongoose";
const { Schema } = mongoose;

const noteSchema = new Schema({
  id: { type: Number },
  date: { type: String, required: true },
  topic: { type: String, required: true },
  description: { type: String },
  link: { type: String },
  challenges: { type: String, required: true },
  tags: [String],
});

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
