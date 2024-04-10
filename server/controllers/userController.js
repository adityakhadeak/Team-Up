import UserModel from "../models/UserModel.js";
import bcrypt from 'bcryptjs'
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken'
import OtpModel from "../models/OtpModel.js";
import sendMail from "../helper/mailer.js";
import { oneMinuteExpiryCheck, threeMinuteExpiryCheck } from "../helper/otpValidate.js";

export const registerController = async (req, res) => {

    try {
        console.log(req.body)

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }
        console.log(req.body)
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
export const loginController = async (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }

        const { username, password } = req.body

        const userExist = await UserModel.findOne({ username: username })

        if (!userExist) {
            return res.status(404).json({
                success: false,
                message: "User does not exist"
            })
        }

        const isCorrect = await bcrypt.compare(password, userExist.password)

        if (!isCorrect) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        if (userExist.isverified == 0) {
            return res.status(401).json({
                success: false,
                message: "Please verify the account"
            })
        }
        const userData = {
            user: userExist
        }

        const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '3d' })

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
            user: userExist
        })


    } catch (error) {

    }
}

const generateOtp = async () => {
    return Math.floor(1000 + Math.random() * 9000)
}
export const sendOTPController = async (req, res) => {

    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }


        const { email } = req.body;

        const userData = await UserModel.findOne({ email })

        if (!userData) {
            return res.status(400).json({
                success: false,
                message: 'User with this email not registered',
            })
        }

        if (userData.isverified == 1) {
            return res.status(400).json({
                success: false,
                message: "Email Id " + email + " is already verified"
            })
        }


        const oldOTP = await OtpModel.findOne({ user_id: userData._id })

        if (oldOTP) {
            const toSendNextOTP = await oneMinuteExpiryCheck(oldOTP.timestamp)

            if (!toSendNextOTP) {
                return res.status(400).json({
                    success: false,
                    message: "Please try again after sometime"
                })
            }
        }

        const generatedOTP = await generateOtp()

        const timeNow = new Date().getTime()
        const newOtp = await OtpModel.findOneAndUpdate(
            { user_id: userData._id },
            { otp: generatedOTP, timestamps: new Date(timeNow) },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )
        const msg = `<p>Hi <b>${userData.username}</b></br><h1>${generatedOTP}</h1></p>`

        sendMail(email, 'otp', msg)
        res.status(200).json({
            success: true,
            message: "Verification otp has been sent to mail"
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const verifyOTPController = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Errors',
                errors: errors.array()
            })
        }

        const { user_id, otp } = req.body

        const existOTP = await OtpModel.findOne({
            user_id,
            otp
        })

        if (!existOTP) {
            return res.status(400).json({
                success: false,
                message: "Wrong OTP"
            })
        }

        const isOTPExpired = await threeMinuteExpiryCheck(existOTP.timestamp)

        if (isOTPExpired) {
            return res.status(400).json({
                success: false,
                message: "OTP Expired"
            })
        }

        await UserModel.findByIdAndUpdate({ _id: user_id }, {
            $set: {
                isverified: 1
            }
        })

        res.status(200).json({
            success: true,
            message: "Account verified"
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}