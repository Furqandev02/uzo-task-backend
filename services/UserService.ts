import {
	CreateUserDTO,
	SubmitChallengeDto,
	User,
	UserIdDto
} from '../Interfaces/User';
import UserModel from '../models/UserModel';
import {
	APPROVAL_EMAIL_MESSAGES,
	USER_CHALLENGE_STATUS,
	USER_ERROR_MESSAGES,
	USER_ROLES
} from '../constants';
import Mailer from '../utils/Mailer';
class UserService {
	async createUser(data: CreateUserDTO): Promise<User> {
		const alreadyExist = await UserModel.findOne({
			email: data.email
		}).lean();

		if (alreadyExist) {
			throw new Error(USER_ERROR_MESSAGES.USER_ALREADY_EXIST);
		}
		console.log(alreadyExist);

		const newRecord = new UserModel({
			...data
		});

		return await newRecord.save();
	}
	async submitChallenge(data: SubmitChallengeDto): Promise<User> {
		const userWithChallengeData = await UserModel.findOne({
			_id: data?.userId
		}).lean();

		const adminResult = await UserModel.findOne({
			role: USER_ROLES.ADMIN
		}).lean();
		const admin = JSON.parse(JSON.stringify(adminResult));
		const user = JSON.parse(JSON.stringify(userWithChallengeData));

		if (user) {
			user.challengeStatus = USER_CHALLENGE_STATUS.PASSED;
			const updateResult = await UserModel.findOneAndUpdate(
				{ _id: data?.userId },
				user,
				{
					new: true
				}
			).lean();
			const updatedRecord = JSON.parse(JSON.stringify(updateResult));

			//send Email
			Mailer.sendMail({
				from: process.env.FROM_EMAIL,
				to: admin?.email,
				subject: APPROVAL_EMAIL_MESSAGES.SUBJECT,
				html: `<h1>${APPROVAL_EMAIL_MESSAGES.HTML_TITLE}</h1>`
			});
			return updatedRecord;
		}
		throw new Error(USER_ERROR_MESSAGES.USER_SUBMIT_ERROR);
	}
	async getUsers(): Promise<User[]> {
		return await UserModel.find().exec();
	}
	async getUser(userId: any): Promise<User | null> {
		return await UserModel.findById({ _id: userId });
	}
}

export default new UserService();
