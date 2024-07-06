import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  skills: { type: [String], required: true }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
