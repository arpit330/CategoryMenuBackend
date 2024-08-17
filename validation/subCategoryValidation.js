const Joi = require("joi");

// validate incoming Subcategory schema
const subCategorySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().optional(),
  description: Joi.string().optional(),
  taxApplicability: Joi.boolean().required(),
  tax: Joi.number().min(0).default(Joi.ref("parent.tax")),
  categoryId: Joi.string().optional()
});

module.exports = { subCategorySchema };
