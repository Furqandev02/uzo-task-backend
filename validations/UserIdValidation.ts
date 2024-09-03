import Joi from 'joi';

export const UserIdSchemaValidation = Joi.object({
	userId: Joi.string().required()
});
