const Joi = require('joi');

const Community =  {
    name: Joi.string().required(),
    createdBy:Joi.string().required(),
    createdDate:Joi.string().required(),
};

module.exports = Community;

