import express from 'express'
import { forgotPasswordLinkGenerator, loginController, registerController, sendOTPController, verifyOTPController } from '../controllers/userController.js'
import { forgotPasswordValidator, loginValidator, otpMailValidator, registerValidation, verifyOTPValidator } from '../helper/validation.js'

const userRouter=express()

userRouter.post('/login',loginValidator ,loginController)
userRouter.post('/register',registerValidation, registerController)

//sending otp
userRouter.post('/send-otp',otpMailValidator,sendOTPController)
userRouter.post('/verify-otp',verifyOTPValidator,verifyOTPController)

userRouter.post('/forgot-password',forgotPasswordValidator,forgotPasswordLinkGenerator)
export default userRouter