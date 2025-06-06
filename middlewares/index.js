const { registrationUserSchema } = require("../schemas/userSchema");

module.exports.validationUser = async (req, res, next) => {
  try {
    await registrationUserSchema.validate(req.body);
    return next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
