import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import postsRoutes from './routes/posts.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

configDotenv();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected successfully to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running successfully on port: ${port}!`)
        })
    })
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    }
)
app.get('/', (req, res) => {
    res.status(200).json('Welcome to memories');
})

app.use('/posts', postsRoutes);
