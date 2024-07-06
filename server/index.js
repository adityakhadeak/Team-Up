import express from 'express'
import dotenv from 'dotenv'
import 'dotenv/config'; // Ensure this line is at the top
import cors from 'cors'
import connectToDB from './database/db.js'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoute.js'
import projectRouter from './routes/Project.js'
const app=express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/projects',projectRouter)
const port=process.env.PORT || 4000

connectToDB()

app.listen(port,()=>{
    console.log(`Server connected on port ${port}`)
})