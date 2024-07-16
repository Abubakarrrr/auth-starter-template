import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT
const URI = process.env.URI

mongoose.connect(URI).then(() => {
    console.log("mongodb connected successfully")
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})
app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Bad request'
    res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})