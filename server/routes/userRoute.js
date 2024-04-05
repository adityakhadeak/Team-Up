import express from 'express'
import { loginController, registerController, sendOTPController } from '../controllers/userController.js'
import { otpMailValidator, registerValidation } from '../helper/validation.js'

const userRouter=express()

userRouter.post('/login',loginController)
userRouter.post('/register',registerValidation, registerController)

//sending otp
userRouter.post('/send-otp',otpMailValidator,sendOTPController)

export default userRouter