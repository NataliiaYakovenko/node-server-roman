const yup = require("yup");

module.exports.registrationUserSchema = yup.object({
  firstName: yup.string().required(),
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string(),
  isSubscribed: yup.boolean().required(),
});
