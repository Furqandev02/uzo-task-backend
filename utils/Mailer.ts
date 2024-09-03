import nodemailer, { Transporter } from 'nodemailer';
import { APPROVAL_EMAIL_MESSAGES } from '../constants';
import dotenv from 'dotenv';
dotenv.config();
interface EmailOptions {
	from?: string;
	to: string;
	subject: string;
	text?: string;
	html?: string;
}

class Mailer {
	private transporter: Transporter;
	private from: string = process.env.FROM_EMAIL || '';

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: Number(process.env.EMAIL_PORT),
			secure: process.env.EMAIL_SECURE === 'true',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		});

		this.from = process.env.FROM_EMAIL || '';
	}

	public async sendMail(options: EmailOptions): Promise<void> {
		try {
			const mailOptions = {
				from: this.from || options.from,
				to: options.to,
				subject: options.subject,
				// text: options.text,
				html: options.html
			};
			console.log(mailOptions);
			await this.transporter.sendMail(mailOptions);
			console.log(APPROVAL_EMAIL_MESSAGES.SUCCESS_MESSAGE);
		} catch (error) {
			console.error(APPROVAL_EMAIL_MESSAGES.ERROR_MESSAGE, error);
		}
	}
}

export default new Mailer();
