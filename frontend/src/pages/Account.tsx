import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import toast from "react-hot-toast";

const Account = () => {
    const {user} = useAppData();
    const firstLetter = user?.name.charAt(0).toUpperCase();

    const navigate = useNavigate();

    const logoutHandler =  () => {
        localStorage.setItem("token","");
        toast.success("Logout success")
    }
  return (
    <div>Account</div>
  )
}

export default Account