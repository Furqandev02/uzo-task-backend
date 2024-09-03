import validateRequest from '../middlewares/validate';
import express from 'express';
import { SubmitChallengeSchemaValidation } from '../validations/SubmitChallengeValidation';
import { UserIdSchemaValidation } from '../validations/UserIdValidation';
import UserController from '../controllers/UserController';
import { UserSchemaValidation } from '../validations/UserValidation';
const router = express.Router();

router.post(
	'/create',
	validateRequest(UserSchemaValidation),
	UserController.createUser
);

router.post(
	'/submit-challenge',
	validateRequest(SubmitChallengeSchemaValidation),
	UserController.submitChallenge
);

router.post(
	'/detail',
	validateRequest(UserIdSchemaValidation),
	UserController.getUser
);
router.get('/list', UserController.getUsers);

export default router;
