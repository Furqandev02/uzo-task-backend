import { Document } from 'mongoose';

export interface User extends Document {
	name: string;
	email: string;
	currentBalance: number;
	initialBalance: number;
	equityClose: number;
	equityLow: number;
	profitTarget: number;
	absoluteEquityDrawdown: number;
	tradingDays: number;
	maxDailyEquityDrawdown: number;
	role: string;
	rejectedReason?: string;
	status?: string;
	adminStatus?: string;
	challengeStatus?: string;
}

export interface CreateUserDTO {
	name: string;
	email: string;
	currentBalance: number;
	initialBalance: number;
	equityClose: number;
	equityLow: number;
	profitTarget: number;
	absoluteEquityDrawdown: number;
	tradingDays: number;
	maxDailyEquityDrawdown: number;
	role?: string;
	rejectedReason?: string;
	status?: string;
	adminStatus?: string;
	challengeStatus?: string;
}

export interface SubmitChallengeDto {
	userId: string;
}

export interface UserIdDto {
	userId: string | null | undefined;
}
