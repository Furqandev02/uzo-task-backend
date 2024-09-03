import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();
app.use(cors());
app.use(helmet());
app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
