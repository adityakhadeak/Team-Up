import UserModel from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import OtpModel from "../models/OtpModel.js";
import sendMail from "../helper/mailer.js";
export const registerController = async (req, res) => {

    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }

        const { username, password, email, firstname, lastname } = req.body

        const doUsernameExist = await UserModel.findOne({ username })
        const doEmailExist = await UserModel.findOne({ email })

        if (doUsernameExist || doEmailExist) {
            return res.status(409).json({
                success: false,
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
            success: true,
            message: "User registered successfully",
            data: savedUser
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}
export const loginController = (req, res) => {

}

const generateOtp=async()=>{
    return Math.floor(1000 + Math.random()*9000)
}
export const sendOTPController = async(req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }


        const {email}=req.body;

        const userData=await UserModel.findOne({email})

        if(!userData)
        {
            return res.status(400).json({
                success: false,
                message: 'User with this email not registered',
            })
        }

        if(userData.isverified==1)
        {
            return res.status(400).json({
                success:false,
                message:"Email Id " + email+ " is already verified"
            })
        }

        const otp=await generateOtp()

        const savedOTP=new OtpModel(
            {
                user_id:userData._id,
                otp:otp
            })

           await savedOTP.save();
        const msg=`<p>Hi <b>${userData.username}</b></br><h1>${otp}</h1></p>`

        sendMail(email,'otp',msg)
        res.status(200).json({
            success:true,
            message:"Verification otp has been sent to mail"
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}