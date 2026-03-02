import { AuthenticatedRequest } from "../middlewares/isAuth.js";
import TryCatch from "../middlewares/trycatch.js";

export const addRestaurant = TryCatch(async (req:AuthenticatedRequest,res) => {
    const user = req.user;
})