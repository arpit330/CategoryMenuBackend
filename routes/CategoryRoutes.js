const express = require("express"),
  {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
  } = require("../controllers/CategoryController"),
  router = express.Router(),
  { categorySchema } = require("../validation/categoryValidation"),
  validate = require("../middleware/validate");

router.post("/", validate(categorySchema), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", validate(categorySchema), updateCategory);

module.exports = router;
