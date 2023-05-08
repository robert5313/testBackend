import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
// Connect to MongoDB database
const MongoDB_Connection_String = `mongodb://localhost:27017`;
async function connectToMongoDB(connectionString) {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB database!');
}
async function startServer() {
    try {
        await connectToMongoDB(MongoDB_Connection_String);
        const PORT = 8000;
        const app = express();
        app.use(express.json());
        app.use(cookieParser());
        app.use(cors());
        app.use(express.urlencoded({ extended: false }));
        app.get('/', (req, res) => {
            res.status(200).send('Hello World!');
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (e) {
        console.log('Error connecting to MongoDB: ', e);
    }
}
startServer();
//# sourceMappingURL=app.mjs.map