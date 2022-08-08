import Joi from 'joi';


export const userLogin = Joi.object({
    email: Joi
        .string()
        .email({ minDomainSegments: 2})
        .required(),
    password: Joi
        .string()
        .min(6)
        .required()
});