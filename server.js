require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  connectDB = require("./config/db"),
  CategoryRoutes = require("./routes/CategoryRoutes"),
  SubCategoryRoutes = require("./routes/SubCategoryRoutes"),
  ItemRoutes = require("./routes/ItemRoutes"),
  rateLimiter = require('./middleware/ratelimit');


const app = express(),
  PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

rateLimiter(app);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/categories", CategoryRoutes);
app.use("/categories/:categoryId/subcategories", SubCategoryRoutes);
app.use(
  "/categories/:categoryId/subcategories/:subcategoryId/items",
  ItemRoutes
);
app.use(
  "/categories/:categoryId/items",
  ItemRoutes
);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
