const SubCategory = require("../models/SubCategoryModel");

// Function to create a new subcategory
async function createSubCategory(req, res) {
  try {

    // Create a new SubCategory instance with the data from the request body
    // and associate it with the categoryId from the request parameters
    const subCategory = new SubCategory({
      ...req.body,
      categoryId: req.params.categoryId,
    });

    await subCategory.save();
    
    res.status(201).json(subCategory);
  } 
  catch (error) {
    if (err.code === 11000) {
      // Handle duplicate key error
      res
        .status(400)
        .send({ error: "Subcategory already exists within this category" });
    } 
    else {
      // Handle other errors
      res.status(500).send({ error: err.message });
    }
  }
}

// Function to get all subcategories, optionally filtered by name
async function getAllSubCategories(req, res) {
  try {

    // If a name query parameter is provided, find subcategories by name within the category
    if (req?.query?.name) {
      const categories = await SubCategory.find({
        categoryId: req.params.categoryId,
        name: new RegExp(req.query.name, "i"),
      });

      return res.status(200).json(categories);
    }

    const subCategories = await SubCategory.find({
      categoryId: req.params.categoryId,
    });

    res.status(200).json(subCategories);
  } 
  catch (error) {
    res.status(500).send({ error: err.message });
  }
}

// Function to get a single subcategory by its ID
async function getSubCategoryById(req, res) {
  try {
    // Find the subcategory by its ID, which is provided in the request parameters
    const subCategory = await SubCategory.findById(req.params.id);

    if (!subCategory) {
      return res.status(404).send({ error: err.message });
    }

    res.status(200).json(subCategory);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch sub-category" });
  }
}

// Function to update an existing subcategory by its ID
async function updateSubCategory(req, res) {
  try {
    // Find the subcategory by its ID and update it with the data from the request body
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!subCategory) {
      return res.status(404).json({ error: "Sub-category not found" });
    }

    res.status(200).json(subCategory);
  } 
  catch (error) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
};
