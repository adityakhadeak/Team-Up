import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../helper.js"
import { useToast } from '@chakra-ui/react'
import { UserDataContext } from "./UserDataContext.js";
export const RegistrationContext = createContext()

export const RegistrationContextProvider = (props) => {

    const { loggedUserData, setLoggedUserData } = useContext(UserDataContext)
    const toast = useToast()
    const [registrationStep, setRegistrationStep] = useState(1)
    const [passwordRecoverStep, setPasswordRecoverStep] = useState(1)
    const [success, setSuccess] = useState()
    const [userRegistrationInfo, setUserRegistrationInfo] = useState({ username: "", password: "", email: "", firstname: "", lastname: "" })



    const handleRegistration = async () => {
        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegistrationInfo)
        })
        const resJson = await response.json()
        setSuccess(resJson.success)
        if (resJson.success)
            setLoggedUserData({ ...userRegistrationInfo, user_id: resJson.data._id, isverified: resJson.data.isverified })
        toast({
            title: resJson.message,
            description: resJson.success ? 'Your account has been created successfully.' : 'Failed to create your account.',
            status: resJson.success ? 'success' : 'error',
            duration: 5000,
            isClosable: true
        });


    }
    //For Generating the otp
    const handleOTPGenerate = async (email) => {
        const response = await fetch(`${BASE_URL}/api/auth/send-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        })
        const resJson = await response.json()
        toast({
            title: resJson.message,
            description: resJson.success ? 'OTP has been sent to your email id please verify your account' : 'Failed to send OTP',
            status: resJson.success ? 'success' : 'error',
            duration: 5000,
            isClosable: true
        });

    }

    //To verify the otp
    const handleOTPVerify = async (otp, user_id) => {
        const response = await fetch(`${BASE_URL}/api/auth/verify-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id, otp })
        })
        const resJson = await response.json()
        console.log(resJson)
        toast({
            title: resJson.message,
            description: resJson.success ? 'Account Verified' : 'Failed to verify account',
            status: resJson.success ? 'success' : 'error',
            duration: 5000,
            isClosable: true
        });

    }
    return (<RegistrationContext.Provider value={{ passwordRecoverStep, setPasswordRecoverStep, setUserRegistrationInfo, userRegistrationInfo, registrationStep, setRegistrationStep, handleRegistration, success, handleOTPVerify, handleOTPGenerate, setSuccess }}>
        {props.children}
    </RegistrationContext.Provider>)
}