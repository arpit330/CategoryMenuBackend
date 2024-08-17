const SubCategory = require("../models/SubCategoryModel");

async function createSubCategory(req, res) {
  try {
    const subCategory = new SubCategory({
      ...req.body,
      categoryId: req.params.categoryId,
    });

    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    if (err.code === 11000) {
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

async function getAllSubCategories(req, res) {
  try {

    // find category by name if name is not empty
    if (req?.query?.name) {
      const categories = await SubCategory.find({
        categoryId: req.params.categoryId,
        name: new RegExp(req.query.name, "i"),
      });

      res.status(200).json(categories);
      return;
    }

    const subCategories = await SubCategory.find({
      categoryId: req.params.categoryId,
    });

    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

async function getSubCategoryById(req, res) {
  try {
    const subCategory = await SubCategory.findById(req.params.id);

    if (!subCategory) {
      return res.status(404).send({ error: err.message });
    }

    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sub-category" });
  }
}

async function updateSubCategory(req, res) {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!subCategory) {
      return res.status(404).json({ error: "Sub-category not found" });
    }

    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
};
