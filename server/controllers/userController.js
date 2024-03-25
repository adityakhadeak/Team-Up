import UserModel from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
export const registerController = async (req, res) => {

    try {

        const errors=validationResult(req)
        if(!errors.isEmpty())
        {
            return res.status(400).json({
                success:false,
                message:'Errors',
                errors:errors.array()
            })
        }
        
        const { username, password, email, firstname, lastname } = req.body

        const doUsernameExist = await UserModel.findOne({ username })
        const doEmailExist = await UserModel.findOne({ email })

        if (doUsernameExist || doEmailExist) {
            return res.status(409).json({
                success:false,
                message: 'User with the provided credentials already exists.'
            })
        }

        const encryptedPass = await bcrypt.hash(password, 10)

        const newUser = new UserModel({
            username,
            password: encryptedPass,
            email,
            firstname,
            lastname
        })

        const savedUser = await newUser.save()

        res.status(201).json({
            success:true,
            message: "User registered successfully",
            data: savedUser
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success:false,
            message: "Internal server error"
        })
    }
}
export const loginController = (req, res) => {

}