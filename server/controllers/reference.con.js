import Reference from "../models/Reference.mod.js";

// create
export const addReference = async (req, res, next) => {
  try {
    const reference = await Reference.create(req.body);

    const obj = reference.toObject();

    delete obj._id;
    delete obj.__v;

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: {
        ...obj,
        id: reference._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// get all
export const getReferences = async (req, res, next) => {
  try {
    const references = await Reference.find();

    const data = references.map(item => ({
      id: item._id,
      title: item.title,
      description: item.description
    }));

    res.json({
      success: true,
      message: "References list retrieved successfully.",
      data
    });
  } catch (err) {
    next(err);
  }
};

// get one
export const getReferenceById = async (req, res, next) => {
  try {
    const reference = await Reference.findById(req.params.id);

    const obj = reference.toObject();

    delete obj._id;
    delete obj.__v;

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: {
        ...obj,
        id: reference._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// update
export const updateReference = async (req, res, next) => {
  try {
    await Reference.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Reference updated successfully."
    });
  } catch (err) {
    next(err);
  }
};

// delete
export const deleteReference = async (req, res, next) => {
  try {
    await Reference.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Reference deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};