import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../helper";
import { useNavigate } from "react-router-dom";

export const UserDataContext = createContext()

export const UserDataContextProvider = (props) => {
    const [loggedUserData, setLoggedUserData] = useState({ user_id: "", firstname: "", lastname: "", username: "", email: "", isverified: "" })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (isLoggedIn)
            getLoggedInUserData()
        
    }, [isLoggedIn])

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('teamup-login'))
console.log(loggedUserData)
    }, [])

    

    const getLoggedInUserData = async () => {
        const response = await fetch(`${BASE_URL}/api/auth/get-user-info/${localStorage.getItem('teamup_user_id')}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const resJson = await response.json()

        if (resJson.success) {
            console.log(resJson.user_data)
            setLoggedUserData(resJson.user_data)
        }

    }


    return (<UserDataContext.Provider value={{ loggedUserData, setLoggedUserData, isLoggedIn, setIsLoggedIn }}>
        {props.children}
    </UserDataContext.Provider>)

}