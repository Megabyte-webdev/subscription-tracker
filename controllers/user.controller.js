import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await User.find().select("-password -__v"); // Exclude password and version field

    // Return the list of users
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    next(error); // Pass the error to the error handling middleware
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Fetch user by ID from the database
    const user = await User.findById(id).select("-password -__v"); // Exclude password and version field

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Return the user details
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};
