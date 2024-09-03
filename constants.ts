export const HTTP_STATUS_CODES = {
	SUCCESS: 200,
	CREATE: 201,
	BAD_REQUEST: 400,
	INTERNAL_SERVER_ERROR: 500
};



export const USER_ROLES = {
	ADMIN: 'ADMIN',
	USER: 'USER'
};
export const USER_CHALLENGE_STATUS = {
	PASSED: 'PASSED',
	PENDING: 'PENDING',
	FAILED: 'FAILED'
};

export const ADMIN_STATUS = {
	APPROVED: 'APPROVED',
	REJECTED: 'REJECTED'
};

export const USER_ERROR_MESSAGES = {
	USER_ALREADY_EXIST: 'User already exist with same email',
	USER_CREATE_ERROR: 'Error Creating User',
	USERS_FETCH_ERROR: 'Error Fetching Users',
	USER_FETCH_ERROR: 'Error Fetching User',
	USER_SUBMIT_ERROR: 'Error Submitting Challenge',
	WENT_WRONG: 'Something Went Wrong'
};
export const ADMIN_ERROR_MESSAGES = {
	ADMIN_CREATE_ERROR: 'Error To Review Status',
	ADMIN_FETCH_ERROR: 'Error Fetching Approval Waiting Users',
	ADMIN_REJECTED_ERROR: 'Unspecified Rejection Reason',
	ADMIN_INVALID_USER_ERROR: 'Invalid User Data Provided'
};

export const APPROVAL_EMAIL_MESSAGES = {
	SUBJECT: 'User passed challenge',
	HTML_TITLE: 'User passed challenge and waiting for approval to go live.',
	SUCCESS_MESSAGE: 'Approval waiting email sent successfully',
	ERROR_MESSAGE: 'Error sending approval waiting email'
};
