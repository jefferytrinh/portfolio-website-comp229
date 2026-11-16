import Project from "../models/Project.mod.js";

// create
export const addProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    const obj = project.toObject();

    delete obj._id;
    delete obj.__v;

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
      data: {
        ...obj,
        id: project._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// get all
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();

    const data = projects.map(item => ({
      id: item._id,
      title: item.title,
      description: item.description
    }));

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data
    });
  } catch (err) {
    next(err);
  }
};

// get one
export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    const obj = project.toObject();

    delete obj._id;
    delete obj.__v;

    res.json({
      success: true,
      message: "Project retrieved successfully.",
      data: {
        ...obj,
        id: project._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// update
export const updateProject = async (req, res, next) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Project updated successfully."
    });
  } catch (err) {
    next(err);
  }
};

// delete
export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Project deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};