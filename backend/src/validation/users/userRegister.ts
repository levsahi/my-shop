import Joi from 'joi';


export const userRegister = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    email: Joi
        .string()
        .email({ minDomainSegments: 2})
        .required(),
    password: Joi
        .string()
        .min(6)
        .required()
    
});