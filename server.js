import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js';
import contactRouter from './Routes/contact.js';
import cors from 'cors';

const app = express();
config({ path: '.env' });
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.URL, {
    dbName: 'June2025-FullStack',
  })
  .then(() => console.log('MongoDB Connected.....'))
  .catch((err) => console.log('Error :', err));

//register user route
app.use('/api/user', userRouter);

//register contact route
app.use('/api/contact', contactRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));
