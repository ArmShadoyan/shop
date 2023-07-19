const Joi = require("joi");

const userSchema = Joi.object({
    firstName:Joi.string().min(3).required(),
    lastName:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    // .error(new Error("incorrect email adress")),
    password:Joi.string().min(3).max(13).lowercase().uppercase().required()
})

module.exports = { userSchema };