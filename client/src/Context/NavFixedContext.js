import { createContext, useEffect, useState } from "react";

export const  NavFixedContext=createContext()


export const NavFixedContextProvider=(props)=>{
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
       

        window.addEventListener('scroll', handleScroll);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);

        };
        // eslint-disable-next-line
    }, []);

    const handleScroll = () => {
        // Define the scroll position or section offset where you want the change to occur
        const triggerPosition = 55; // Adjust this value as needed
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Check if the scroll position is greater than or equal to the trigger position
        if (scrollPosition >= triggerPosition) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    return(
        <NavFixedContext.Provider  value={{isFixed,setIsFixed}}>
            {props.children}
        </NavFixedContext.Provider>
    )
}