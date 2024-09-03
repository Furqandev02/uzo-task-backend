import { Schema, model } from 'mongoose';
import { User } from '../Interfaces/User';
import { USER_ROLES } from '../constants';

const UserSchema = new Schema<User>(
	{
		name: { type: String, required: true, default: '' },
		email: { type: String, required: true, default: '' },
		currentBalance: { type: Number, required: true },
		initialBalance: { type: Number, required: true },
		equityClose: { type: Number, required: true },
		equityLow: { type: Number, required: true },
		profitTarget: { type: Number, required: true },
		absoluteEquityDrawdown: { type: Number, required: true },
		tradingDays: { type: Number, required: true },
		maxDailyEquityDrawdown: { type: Number, required: true },
		role: { type: String, default: USER_ROLES.USER },
		rejectedReason: { type: String, default: null },
		status: { type: String, default: null },
		adminStatus: { type: String, default: null },
		challengeStatus: { type: String, default: null }
	},
	{ timestamps: true }
);

const UserModel = model<User>('User', UserSchema);

export default UserModel;
