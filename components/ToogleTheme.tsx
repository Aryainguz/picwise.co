"use client"
import {useEffect , useState} from "react"
import {FaMoon} from "react-icons/fa"
import {BsSunFill} from "react-icons/bs"
import React from 'react'


const ToogleTheme = () => {
    const [darkMode,setDarkMode]=useState(true);

    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    },[])

    useEffect(()=>{
        if (darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark")
        }
        else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light")
        }
    },[darkMode]);
  return (
    <>
    <div className="relative w-16 h-8 flex item-center dark:bg-gray-900 bg-blue-600 cursor-pointer rounded-full p-1 "
    onClick={()=>{setDarkMode(!darkMode)}}>
        <FaMoon className="text-white " size={20}/>
        <div className="absolute bg-white  w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ?{left : "2px"}:{right: "2px"}}>

        </div>
        <BsSunFill className="ml-auto text-yellow-400"
        size={20}/>
    </div>
    </>
  )
}

export default ToogleTheme