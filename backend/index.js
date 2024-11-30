import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import { configDotenv } from 'dotenv';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.listen(3000, () => {
    console.log('Server is running successfully!')
})
