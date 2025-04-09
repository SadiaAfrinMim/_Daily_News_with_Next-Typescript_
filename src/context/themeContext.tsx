"use client"

import { createContext, useEffect, useState } from "react";

interface ThemeContextType{
    isDarkMode:boolean;
    toggleMenu :()=>void;

}

export const ThemeContext = createContext<ThemeContextType|undefined>(undefined)
export const ThemeProvider = ({children}:{
    children: React.ReactNode
  })=>{
    const [isDarkMode,setIsDarkMode]=useState(false)
    const toggleMenu=()=>{
        setIsDarkMode(!isDarkMode)
    }
    useEffect(()=>{
        if(isDarkMode){
            document.body.classList.add("dark")
        }
        else{
            document.body.classList.remove("dark")
        }

    },[isDarkMode])
    return(
        <ThemeContext.Provider value={{isDarkMode,toggleMenu}}>
{children}
        </ThemeContext.Provider>
    )
}