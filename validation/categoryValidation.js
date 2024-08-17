const Joi = require('joi');

// validate incoming Category schema
const categorySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().optional(),
  description: Joi.string().optional(),
  taxApplicability: Joi.boolean().required(),
  tax: Joi.number().min(0).optional().when('taxApplicability', { is: true, then: Joi.required() }),
  taxType: Joi.string().optional(),
});

module.exports = { categorySchema };
