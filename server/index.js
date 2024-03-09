import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './database/db.js'

const app=express()

dotenv.config()

const port=process.env.PORT || 4000

connectToDB()

app.listen(port,()=>{
    console.log(`Server connected on port ${port}`)
})