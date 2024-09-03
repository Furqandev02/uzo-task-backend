import Joi from 'joi';
import { ADMIN_STATUS } from '../constants';

export const AdminSchemaValidation = Joi.object({
	userId: Joi.string().required(),
	adminStatus: Joi.string()
		.valid(ADMIN_STATUS.APPROVED, ADMIN_STATUS.REJECTED)
		.required(),
	rejectedReason: Joi.string().optional()
});
