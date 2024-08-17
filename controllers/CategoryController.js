const Category = require("../models/CategoryModel");

// Function to create a new category
async function createCategory(req, res) {
  try {
    // Create a new Category instance with the data from the request body
    const category = new Category(req.body);

    await category.save();

    res.status(201).json(category);
  } 
  catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error (e.g., a category or subcategory with the same name already exists)
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

//Function to get all categories or search for categories by name
async function getCategories(req, res) {
  try {
    // If a query parameter 'name' is provided, search categories by name using a case-insensitive regex
    if (req?.query?.name) {
      const categories = await Category.find({
        name: new RegExp(req.query.name, "i"),
      });

      return res.status(200).json(categories);
    }

    // If no query parameter is provided, return all categories
    const categories = await Category.find();

    res.status(200).json(categories);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}

// Function to get a single category by its ID
async function getCategoryById(req, res) {
  try {
    const category = await Category.findById(req.params.id);

    // If the category is not found, respond with a 404 status code
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
}

// Function to update an existing category by its ID
async function updateCategory(req, res) {
  try {
    // Find the category by its ID and update it with the data from the request body
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } 
  catch (error) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
};
