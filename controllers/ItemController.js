const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const item = new Item({ ...req.body, categoryId: req.params.categoryId, subcategoryId: req.params.subcategoryId });

    await item.save();
    res.status(201).json(item);
  } 
  catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    
    res.status(200).json(items);
  } 
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(item);
  } 
  catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item' });
  }
};

exports.searchItemsByName = async (req, res) => {
  try {
    const items = await Item.find({ name: new RegExp(req.query.name, 'i') });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search items' });
  }
};
