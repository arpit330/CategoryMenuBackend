const express = require('express'),
    { createCategory, getAllCategories, getCategoryById, updateCategory } = require('../controllers/categoryController'),
    router = express.Router();

router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);

module.exports = router;
