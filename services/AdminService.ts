import { ReviewUserLiveRequestDTO } from '../Interfaces/Admin';
import {
	ADMIN_ERROR_MESSAGES,
	ADMIN_STATUS,
	USER_CHALLENGE_STATUS
} from '../constants';
import { User } from '../Interfaces/User';
import UserModel from '../models/UserModel';

class AdminService {
	async reviewUserLiveStatus(
		data: ReviewUserLiveRequestDTO
	): Promise<User | null> {
		const userData = await UserModel.findOne({ _id: data?.userId }).lean();
		const user = JSON.parse(JSON.stringify(userData));

		if (
			user &&
			data?.adminStatus === ADMIN_STATUS.APPROVED &&
			user?.challengeStatus === USER_CHALLENGE_STATUS.PASSED
		) {
			user.adminStatus = data.adminStatus;
			return await UserModel.findOneAndUpdate(
				{ _id: data?.userId },
				user,
				{ new: true }
			).lean();
		} else if (user && data?.adminStatus === ADMIN_STATUS.REJECTED) {
			user.adminStatus = data.adminStatus;
			user.rejectedReason =
				data?.rejectedReason ||
				ADMIN_ERROR_MESSAGES.ADMIN_REJECTED_ERROR;
			return await UserModel.findOneAndUpdate(
				{ _id: data?.userId },
				user,
				{ new: true }
			).lean();
		}
		throw new Error(ADMIN_ERROR_MESSAGES.ADMIN_INVALID_USER_ERROR);
	}
	async getApprovalWaitingUsers(): Promise<User[]> {
		return await UserModel.find({
			challengeStatus: USER_CHALLENGE_STATUS.PASSED
		}).lean();
	}
}

export default new AdminService();
