import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../main";
import type { AppContextType, User } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider = ({children}:AppProviderProps) => {
    const [user,setUser] = useState<User | null>(null);
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
            setUser(data);
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

    return (<AppContext.Provider value={{isAuth,loading,setIsAuth,setUser,setLoading,user}}>{children}</AppContext.Provider>)
};

export const useAppData = ():AppContextType => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error("useAppData must be used with in AppProvider");
    }

    return context;
}