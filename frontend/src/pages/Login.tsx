import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { authService } from "../main";
import toast from "react-hot-toast";
import {GoogleLogin} from "@react-oauth/google"

const Login = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()

  const responseGoogle = async (authResult:any) => {
    setLoading(true)
    try {
      const result = await axios.post(`${authService}/api/auth/login`,{
        code: authResult["code"]
      });

      localStorage.setItem("token",result.data.token);
      toast.success(result.data.message);
      setLoading(false)
      navigate("/")

    } catch (error) {

      console.log(error);
      toast.error("Problem while logging");
      setLoading(false);
    }
  }
  return (
    <div>Login</div>
  )
}

export default Login