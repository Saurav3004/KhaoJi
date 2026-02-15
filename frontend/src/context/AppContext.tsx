import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { authService } from "../main";

const AppContext = createContext(undefined)

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider = ({children}:AppProviderProps) => {
    const [user,setUser] = useState(null);
    const [isAuth,setIsAuth] = useState(false);
    const [loading,setLoading] = useState(true);

    const [location,setLocation] = useState(null);
    const [loadingLocation,setLoadingLocation] = useState(false)
    const [city,setCity] = useState("Fetching Location...");

    async function fetchUser(){
        try {
            const token = localStorage.getItem("token");
            const {data} = await axios.get(`${authService}/api/auth/me`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(data.user);
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    },[])

    return (<AppContext.Provider value={{}}>{children}</AppContext.Provider>)
}