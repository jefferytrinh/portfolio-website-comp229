import Service from "../models/Service.mod.js";

// create
export const addService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);

    const obj = service.toObject();

    delete obj._id;
    delete obj.__v;

    res.status(201).json({
      success: true,
      message: "Service added successfully.",
      data: {
        ...obj,
        id: service._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// get all
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();

    const data = services.map(item => ({
      id: item._id,
      title: item.title,
      description: item.description
    }));

    res.json({
      success: true,
      message: "Services list retrieved successfully.",
      data
    });
  } catch (err) {
    next(err);
  }
};

// get one
export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    const obj = service.toObject();

    delete obj._id;
    delete obj.__v;

    res.json({
      success: true,
      message: "Service retrieved successfully.",
      data: {
        ...obj,
        id: service._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// update
export const updateService = async (req, res, next) => {
  try {
    await Service.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Service updated successfully."
    });
  } catch (err) {
    next(err);
  }
};

// delete
export const deleteService = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Service deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};