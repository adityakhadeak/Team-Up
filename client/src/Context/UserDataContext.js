import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../helper";

export const UserDataContext = createContext()

export const UserDataContextProvider = (props) => {
    const [loggedUserData, setLoggedUserData] = useState({ user_id: "", firstname: "", lastname: "", username: "", email: "", isverified: "", location: "", gender: "", about: "", headline: "", dob: "", skills: [] })
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('teamup-login'))
            getLoggedInUserData()

    }, [isLoggedIn])

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('teamup-login'))
        console.log(loggedUserData)
    }, [])



    const getLoggedInUserData = async () => {
        const response = await fetch(`${BASE_URL}/api/user/get-user-info/${localStorage.getItem('teamup_user_id')}`, {
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

    const updateUserData = async (firstname, lastname, gender, dob, location, headline, about) => {
        const response = await fetch(`${BASE_URL}/api/user/update-user-info/${localStorage.getItem('teamup_user_id')}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, gender, dob, location, headline, about })
        })
        const resJson = await response.json()
        console.log(resJson)
        if (resJson.success) {
            console.log(resJson.user_data)
            setLoggedUserData({
                ...loggedUserData,
                firstname: resJson.user_data.firstname,
                lastname: resJson.user_data.lastname,
                gender: resJson.user_data.gender,
                dob: resJson.user_data.dob,
                location: resJson.user_data.location,
                about: resJson.user_data.about,
                headline: resJson.user_data.headline,
            })
        }
    }

    const addUserSkill = async (skill) => {
        const response = await fetch(`${BASE_URL}/api/user/add-skill/${localStorage.getItem('teamup_user_id')}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ skill })
        })
        const resJson = await response.json()
        if (resJson.success) {
            setLoggedUserData({ ...loggedUserData, skills: resJson.skills })
        }
    }


    return (<UserDataContext.Provider value={{ addUserSkill, updateUserData, loggedUserData, setLoggedUserData, isLoggedIn, setIsLoggedIn, getLoggedInUserData }}>
        {props.children}
    </UserDataContext.Provider>)

}