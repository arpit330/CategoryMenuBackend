const Item = require("../models/ItemModel");

async function createItem(req, res) {
  try {
    const item = new Item({
      ...req.body,
      categoryId: req.params.categoryId,
      subcategoryId: req.params?.subcategoryId,
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

async function getAllItems(req, res) {
  try {
    const { categoryId, subcategoryId } = req.params;

    let query = {};

    if (!subcategoryId) {
      query.categoryId = categoryId;

      // only fetch items without subCategory , when fetchAll is set false
      if (!req?.query?.fetchAll) {
        query.subcategoryId = null;
      }
    } else {
      query.subcategoryId = subcategoryId;
    }

    const items = await Item.find(query);

    res.status(200).json(items);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

async function getItemById(req, res) {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

async function updateItem(req, res) {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

async function searchItemsByName(req, res) {
  try {

    // Creating a regEx to get all the Items with given searchQuery in their name
    const items = await Item.find({ name: new RegExp(req.query.name, "i") });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  searchItemsByName,
};
