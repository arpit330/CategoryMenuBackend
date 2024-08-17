const Category = require("../models/CategoryModel");

async function createCategory(req, res) {
  try {
    const category = new Category(req.body);

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate key error
      res
        .status(400)
        .send({ error: "Subcategory already exists within this category" });
    } else {
      // Handle other errors
      res.status(500).send({ error: err.message });
    }
  }
}

async function getCategories(req, res) {
  try {
    if (req?.query?.name) {
      const categories = await Category.find({
        name: new RegExp(req.query.name, "i"),
      });

      return res.status(200).json(categories);
    }

    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
}

async function getCategoryById(req, res) {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category" });
  }
}

async function updateCategory(req, res) {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
};
