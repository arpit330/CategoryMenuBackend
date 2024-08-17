const express = require("express"),
  {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    searchItemsByName,
  } = require("../controllers/ItemController"),
  router = express.Router({ mergeParams: true }),
  { itemSchema } = require("../validation/itemValidation"),
  validate = require("../middleware/validate");

router.post("/", validate(itemSchema), createItem);
router.get("/", getAllItems);
router.get("/find", searchItemsByName);
router.get("/:id", getItemById);
router.put("/:id", validate(itemSchema), updateItem);

module.exports = router;
