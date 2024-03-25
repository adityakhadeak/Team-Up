import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'
import { registerValidation } from '../helper/validation.js'

const userRouter=express()

userRouter.post('login',loginController)
userRouter.post('register',registerValidation, registerController)

export default userRouter