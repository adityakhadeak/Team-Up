import {  createContext, useState } from "react";

export const UserDataContext = createContext()

export const UserDataContextProvider = (props) => {
    const [loggedUserData, setLoggedUserData] = useState({ user_id: "", firstname: "", lastname: "", username: "", email: "", isverified: "" })



    return (<UserDataContext.Provider value={{ loggedUserData, setLoggedUserData }}>
        {props.children}
    </UserDataContext.Provider>)

}