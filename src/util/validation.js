import Joi from "react-joi-validation";

// const signupSchema = Joi.object({
//   displayName: Joi.string().required(),
//   email: Joi.string().min(6).required().email(),
//   password: Joi.string().min(6).required(),
//   gender: Joi.string().required(),
//   DOB: Joi.string().required(),
// });
const loginSchema = Joi.object().keys({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});
// const loginSchema = "gvhvg";
// const signupSchema = "dafcadfcad";

export default loginSchema;
