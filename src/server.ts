import express, { Application } from 'express';
import dotenv from 'dotenv';
import router from './routes/wordUpRoutes'
import { errorHandler } from './middleware/errorMiddleware'
dotenv.config();
const port = process.env.PORT || 8080;
const app: Application = express();


// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/word', router);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));