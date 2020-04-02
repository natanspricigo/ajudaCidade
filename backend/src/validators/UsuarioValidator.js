const { celebrate, Segments, Joi } = require('celebrate');


const criacaoAlteracao = celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
});

module.exports = { criacaoAlteracao };
