import { Request,Response } from "express"

export const loginUser = async (req:Request,res:Response) => {
    return res.json(req.body)
}