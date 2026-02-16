import { useLocation, useSearchParams } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import { useEffect, useState } from "react";

const Navbar = () => {
    const {isAuth} = useAppData();
    const currLocation = useLocation();

    const isHomePage = currLocation.pathname === "/"

    const [searchParams,setSearchParams] = useSearchParams()
    const [search,setSearch] = useState(searchParams.get("search") || "");

    useEffect(() => {
        const timer = setTimeout(() => {
            if(search){
                setSearchParams(search)
            }else{
                setSearchParams({})
            }
        },400)
        return clearTimeout(timer)
    },[search,setSearchParams]) // <-----  I have to study these dependency array once, it has some confusion
  return (
    <div>Navbar</div>
  )
}

export default Navbar