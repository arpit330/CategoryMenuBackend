/**
 * Function to validate req body with provided request schema
 * 
 * @param {Object} schema 
 * @returns 
 */
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  next();
};

module.exports = validate;
