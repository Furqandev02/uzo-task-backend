import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { USER_ERROR_MESSAGES, HTTP_STATUS_CODES } from '../constants';

class UserController {
	async createUser(req: Request, res: Response) {
		try {
			const newRecord = await UserService.createUser(req.body);
			res.status(HTTP_STATUS_CODES.CREATE).json(newRecord);
		} catch (error: any) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: USER_ERROR_MESSAGES.USER_CREATE_ERROR,
				error: error?.message || USER_ERROR_MESSAGES.WENT_WRONG
			});
		}
	}
	async submitChallenge(req: Request, res: Response) {
		try {
			const updatedRecord = await UserService.submitChallenge(req.body);
			res.status(HTTP_STATUS_CODES.SUCCESS).json(updatedRecord);
		} catch (error) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: USER_ERROR_MESSAGES.USER_SUBMIT_ERROR,
				error
			});
		}
	}
	async getUsers(req: Request, res: Response) {
		try {
			const allRecords = await UserService.getUsers();
			res.status(HTTP_STATUS_CODES.SUCCESS).json(allRecords);
		} catch (error) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: USER_ERROR_MESSAGES.USERS_FETCH_ERROR,
				error
			});
		}
	}
	async getUser(req: Request, res: Response) {
		try {
			const userId = req.body.userId;
			const record = await UserService.getUser(userId);
			res.status(HTTP_STATUS_CODES.SUCCESS).json(record);
		} catch (error) {
			res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
				message: USER_ERROR_MESSAGES.USER_FETCH_ERROR,
				error
			});
		}
	}
}

export default new UserController();
