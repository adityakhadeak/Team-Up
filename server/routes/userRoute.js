import express from 'express'
import { addUserSkill, getUserInfo, updatUserInfo } from '../controllers/userController.js'

const userRouter=express()


userRouter.get('/get-user-info/:user_id',getUserInfo)
userRouter.put('/update-user-info/:user_id',updatUserInfo)
userRouter.post('/add-skill/:user_id',addUserSkill)
export default userRouter