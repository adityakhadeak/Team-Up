// routes/projects.js
import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// POST endpoint to create a new project
router.post('/addproject', async (req, res) => {
  const { title, description, duration, skills } = req.body;

  if (!title || !description || !duration || !skills) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newProject = new Project({ title, description, duration, skills });

  try {
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET endpoint to retrieve all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
