import Joi from 'joi';
import { ADMIN_STATUS, USER_CHALLENGE_STATUS, USER_ROLES } from '../constants';

export const UserSchemaValidation = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	currentBalance: Joi.number().min(0).required(),
	initialBalance: Joi.number().min(0).required(),
	equityClose: Joi.number().min(0).required(),
	equityLow: Joi.number().min(0).required(),
	profitTarget: Joi.number().min(0).required(),
	absoluteEquityDrawdown: Joi.number().min(0).required(),
	tradingDays: Joi.number().min(0).required(),
	maxDailyEquityDrawdown: Joi.number().min(0).required(),
	role: Joi.string().valid(USER_ROLES.ADMIN, USER_ROLES.USER).optional(),
	rejectedReason: Joi.string().optional(),
	status: Joi.string().optional(),
	adminStatus: Joi.string()
		.valid(ADMIN_STATUS.APPROVED, ADMIN_STATUS.REJECTED)
		.optional(),
	challengeStatus: Joi.string()
		.valid(
			USER_CHALLENGE_STATUS.PENDING,
			USER_CHALLENGE_STATUS.PASSED,
			USER_CHALLENGE_STATUS.FAILED
		)
		.optional()
});
