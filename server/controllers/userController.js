import UserModel from "../models/UserModel.js";

import { ObjectId } from "mongodb";
import UserDetailModel from "../models/UserDetailModel.js";

export const getUserInfo = async (req, res) => {
    try {
        const user_id = req.params.user_id
        let user_data = {}
        console.log("hello")

        const userData1 = await UserModel.findOne({ _id: new ObjectId(user_id) })
        if (!userData1) {
            return res.status(404).json({
                success: false,
                message: "User doesn't exist"
            })
        }
        user_data = {
            user_id: userData1._id,
            username: userData1.username,
            firstname: userData1.firstname,
            lastname: userData1.lastname,
            email: userData1.email,
        }
        const userData2 = await UserDetailModel.findOne({ user_id: new ObjectId(user_id) })

        if (userData2) {
            user_data = {
                ...user_data,
                gender: userData2.gender,
                dob: userData2.dob,
                location: userData2.location,
                headline: userData2.headline,
                about: userData2.about,
                skills: userData2.skills
            }
        }
        res.status(200).json({
            success: true,
            user_data
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}


export const updatUserInfo = async (req, res) => {
    try {
        const { firstname, lastname, dob, headline, about, gender, location } = req.body
        const user_id = req.params.user_id

        console.log(user_id)
        console.log(req.body)
        const userExists = await UserModel.findById(user_id)

        if (!userExists) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        await UserModel.findByIdAndUpdate(user_id, {
            firstname, lastname
        })
        await UserDetailModel.findOneAndUpdate(
            { user_id },
            { gender, dob, location, headline, about, skills },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        )

        res.status(404).json({
            success: true,
            message: "Detail updated successfully",
            user_data: {
                firstname, lastname, gender, dob, location, headline, about
            }
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}



export const addUserSkill = async (req, res) => {
    try {
        const { skill } = req.body
        const user_id = req.params.user_id
        const skills = [skill]
        console.log(user_id)
        console.log(req.body)
        const userExists = await UserModel.findById(user_id)

        if (!userExists) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const updatedUserDetail = await UserDetailModel.findOneAndUpdate(
            { user_id },
            { $push: { skills: skill } },
            { new: true, useFindAndModify: false }
        );
        console.log(updatedUserDetail)

        res.status(200).json({
            success: true,
            message: "Skill added successfully",
            skills: updatedUserDetail.skills
        })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }
}