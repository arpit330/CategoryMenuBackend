const express = require('express'),
    { createSubCategory, getAllSubCategories, getSubCategoryById, updateSubCategory } = require('../controllers/subCategoryController'),
    router = express.Router({ mergeParams: true });

router.post('/', createSubCategory);
router.get('/', getAllSubCategories);
router.get('/:id', getSubCategoryById);
router.put('/:id', updateSubCategory);

module.exports = router;
