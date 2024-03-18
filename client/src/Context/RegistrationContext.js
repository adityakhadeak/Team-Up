import { createContext, useState } from "react";

export const RegistrationContext = createContext()

export const RegistrationContextProvider = (props) => {

    const [registrationStep, setRegistrationStep] = useState(1)
    const [passwordRecoverStep, setPasswordRecoverStep] = useState(1)

    const [userRegistrationInfo, setUserRegistrationInfo] = useState({username:"",password:"",email:"",firstname:"",lastname:""})
    return (<RegistrationContext.Provider value={{passwordRecoverStep, setPasswordRecoverStep, setUserRegistrationInfo,userRegistrationInfo,registrationStep, setRegistrationStep}}>
        {props.children}
    </RegistrationContext.Provider>)
}