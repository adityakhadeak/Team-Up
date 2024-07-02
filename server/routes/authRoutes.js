import express from 'express'
import {  loginController, registerController, sendOTPController,resetPasswordController, verifyOTPController } from '../controllers/authController.js'
import {  loginValidator, otpMailValidator, registerValidation, resetPasswordValidator, verifyOTPValidator } from '../helper/validation.js'


const authRouter=express()

authRouter.post('/login',loginValidator ,loginController)
authRouter.post('/register',registerValidation, registerController)

//sending otp
authRouter.post('/send-otp',otpMailValidator,sendOTPController)
authRouter.post('/verify-otp',verifyOTPValidator,verifyOTPController)

authRouter.post('/reset-password',resetPasswordValidator,resetPasswordController)


export default authRouter