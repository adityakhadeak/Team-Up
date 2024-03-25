import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'

const authRouter=express()

authRouter.post('login',loginController)
authRouter.post('register',registerController)

export default authRouter