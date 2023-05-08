import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import compression from 'compression';
import mongoose from 'mongoose';

import router from './router';

dotenv.config();
const app = express();

app.use(cors({
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});

const MONGO_URL = process.env.MONGO_URL //CONNECTION STRING HERE

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));


app.use('/', router());