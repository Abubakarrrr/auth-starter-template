import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
const URI = process.env.URI

mongoose.connect(URI).then(() => {
    console.log("mongodb connected successfully")
}).catch((err)=> {
     console.log(err);
})

const app = express();


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})