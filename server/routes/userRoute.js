import express from 'express'
import {  loginController, registerController, sendOTPController,resetPasswordController, verifyOTPController } from '../controllers/userController.js'
import {  loginValidator, otpMailValidator, registerValidation, resetPasswordValidator, verifyOTPValidator } from '../helper/validation.js'

const userRouter=express()

userRouter.post('/login',loginValidator ,loginController)
userRouter.post('/register',registerValidation, registerController)

//sending otp
userRouter.post('/send-otp',otpMailValidator,sendOTPController)
userRouter.post('/verify-otp',verifyOTPValidator,verifyOTPController)

userRouter.post('/reset-password',resetPasswordValidator,resetPasswordController)
export default userRouter