import swaggerJSDoc from 'swagger-jsdoc';

// Swagger definition
const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Express API with Swagger',
		version: '1.0.0',
		description:
			'A simple Express API application with Swagger documentation'
	},
	servers: [
		{
			url: 'http://localhost:3000/api',
			description: 'Development server'
		}
	]
};

// Options for the swagger docs
const options = {
	swaggerDefinition,
	apis: ['./routes/*.ts']
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
