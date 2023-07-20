const Joi = require("joi");

const orderSchema = Joi.object({
    product:Joi.string().required(),
    quantity:Joi.required(),
    city:Joi.string().required(),
    street:Joi.string().required(),
    home:Joi.required(),
});

module.exports = orderSchema;