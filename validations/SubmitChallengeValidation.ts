import Joi from 'joi';

export const SubmitChallengeSchemaValidation = Joi.object({
	userId: Joi.string().required()
});
