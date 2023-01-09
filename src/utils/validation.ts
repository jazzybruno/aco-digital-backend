import * as Joi from '@hapi/joi'

export const contactValidation : Function = (contact : object) => {
    const schema = Joi.object({
        name : Joi.string().min(5).max(20).required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        website : Joi.string().uri().required(),
        message : Joi.string().min(10).max(100).required()
    })
    
     return schema.validate(contact)
}
