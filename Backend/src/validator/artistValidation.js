const {celebrate, Segments, Joi} = require('celebrate');

const index = celebrate({
    [Segments.BODY] : Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(4).max(20),
    })   
});

const create = celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        cpf: Joi.string().required().min(10).max(11),
        adress: Joi.object().keys({
            cep: Joi.string().required().min(8).max(9),
            street: Joi.string(),
            district: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
        }),
        actingField: Joi.string().required(),
        phoneNumber: Joi.string().required().min(8).max(9),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(4).max(20),
    })   
});

const update = celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        cpf: Joi.string().required(),
        adress: Joi.object().keys({
            cep: Joi.number().required(),
            district: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
        }),
        socialNetwork:  Joi.object().keys({
            type: Joi.string(),
            link: Joi.string()
        }),
        phoneNumber: Joi.number().required(),
        actingField: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(4).max(20),
    })   
});

const destroy = celebrate({
    [Segments.BODY] : Joi.object().keys({
        email: Joi.string().required().email(),
    })   
});

const signin = celebrate({
    [Segments.BODY] : Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(4).max(20),
    })   
});

module.exports = {
    index, 
    create,
    update, 
    destroy,
    signin
};