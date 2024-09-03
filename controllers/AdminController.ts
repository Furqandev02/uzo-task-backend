import { Request, Response } from 'express';
import AdminService from '../services/AdminService';
import { ADMIN_ERROR_MESSAGES, HTTP_STATUS_CODES } from '../constants';

class AdminController {
	async reviewUserLiveStatus(req: Request, res: Response) {
		try {
			const updatedRecord = await AdminService.reviewUserLiveStatus(
				req.body
			);
			res.status(HTTP_STATUS_CODES.SUCCESS).json(updatedRecord);
		} catch (error) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: ADMIN_ERROR_MESSAGES.ADMIN_CREATE_ERROR,
				error
			});
		}
	}
	async getApprovalWaitingUsers(req: Request, res: Response) {
		try {
			const allRecords = await AdminService.getApprovalWaitingUsers();
			res.status(HTTP_STATUS_CODES.SUCCESS).json(allRecords);
		} catch (error) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: ADMIN_ERROR_MESSAGES.ADMIN_FETCH_ERROR,
				error
			});
		}
	}
}

export default new AdminController();
