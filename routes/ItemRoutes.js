const express = require('express'),
    { createItem, getAllItems, getItemById, updateItem, searchItemsByName } = require('../controllers/itemController'),
    router = express.Router({ mergeParams: true });

router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.get('/search', searchItemsByName);

module.exports = router;
