import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

import userRouter from './routes/user.routes.js';
dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});