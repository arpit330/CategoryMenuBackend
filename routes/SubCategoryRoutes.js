const express = require("express"),
  { 
    createSubCategory,
    getAllSubCategories,
    getSubCategoryById,
    updateSubCategory,
  } = require("../controllers/SubCategoryController"),
  router = express.Router({ mergeParams: true }),
  { subCategorySchema } = require('../validation/subCategoryValidation'),
  validate = require("../middleware/validate");


router.post("/", validate(subCategorySchema), createSubCategory);
router.get("/", getAllSubCategories);
router.get("/:id", getSubCategoryById);
router.put("/:id", validate(subCategorySchema), updateSubCategory);

module.exports = router;
