import validateRequest from '../middlewares/validate';
import express from 'express';
import { AdminSchemaValidation } from '../validations/AdminValidation';
import AdminController from '../controllers/AdminController';
const router = express.Router();

router.post(
	'/status-review',
	validateRequest(AdminSchemaValidation),
	AdminController.reviewUserLiveStatus
);
router.get('/list-waiting', AdminController.getApprovalWaitingUsers);

export default router;
