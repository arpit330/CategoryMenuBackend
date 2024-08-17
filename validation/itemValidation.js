const Joi = require("joi");

// Item schema
const itemSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().optional(),
  description: Joi.string().optional(),
  taxApplicability: Joi.boolean().required(),
  tax: Joi.number()
    .min(0)
    .optional()
    .when("taxApplicability", { is: true, then: Joi.required() }),
  baseAmount: Joi.number().min(0).required(),
  discount: Joi.number().min(0).default(0),
  totalAmount: Joi.number().min(0).optional()
});

module.exports = { itemSchema };
