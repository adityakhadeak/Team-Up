import { createContext, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../helper.js"
import { useToast } from '@chakra-ui/react'
export const RegistrationContext = createContext()

export const RegistrationContextProvider = (props) => {

    const toast = useToast()
    const [registrationStep, setRegistrationStep] = useState(1)
    const [passwordRecoverStep, setPasswordRecoverStep] = useState(1)
    const [success, setSuccess] = useState(false)
    const [userRegistrationInfo, setUserRegistrationInfo] = useState({ username: "", password: "", email: "", firstname: "", lastname: "" })


    
    const handleRegistration =  async () => {
        console.log(userRegistrationInfo)
        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRegistrationInfo)
        })
        const resJson = await response.json()
        setSuccess(resJson.success)
        toast({
            title: resJson.message ,
            description: success ? 'Your account has been created successfully.' : 'Failed to create your account.',
            status: success ? 'success' : 'error',
            duration: 5000,
            isClosable: true
          });
       
        setUserRegistrationInfo({ username: "", password: "", email: "", firstname: "", lastname: "" })

    }
    return (<RegistrationContext.Provider value={{ passwordRecoverStep, setPasswordRecoverStep, setUserRegistrationInfo, userRegistrationInfo, registrationStep, setRegistrationStep, handleRegistration,success }}>
        {props.children}
    </RegistrationContext.Provider>)
}