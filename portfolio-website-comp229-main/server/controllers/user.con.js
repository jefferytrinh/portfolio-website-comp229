import User from "../models/User.mod.js";

// create
export const addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    const obj = user.toObject();

    delete obj._id;
    delete obj.__v;

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: {
        ...obj,
        id: user._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// get all
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    const data = users.map(item => ({
      id: item._id,
      title: item.title,
      description: item.description
    }));

    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data
    });
  } catch (err) {
    next(err);
  }
};

// get one
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    const obj = user.toObject();

    delete obj._id;
    delete obj.__v;

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: {
        ...obj,
        id: user._id
      }
    });
  } catch (err) {
    next(err);
  }
};

// update
export const updateUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "User updated successfully."
    });
  } catch (err) {
    next(err);
  }
};

// delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully."
    });
  } catch (err) {
    next(err);
  }
};