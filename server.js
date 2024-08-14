require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  connectDB = require('./config/db'),
  categoryRoutes = require('./routes/CategoryRoutes'),
  SubCategoryRoutes = require('./routes/SubCategoryRoutes'),
  ItemRoutes = require('./routes/ItemRoutes');

const app = express(),
  PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/categories/:categoryId/subcategories', SubCategoryRoutes);
app.use('/api/categories/:categoryId/subcategories/:subcategoryId/items', ItemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
