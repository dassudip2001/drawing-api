import { Request, Response } from 'express';
import { loginuser, registerUser } from '../services/authService';
export const register=async(req:Request,res:Response)=>{
    try {
        const data=await registerUser(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const login=async(req:Request,res:Response)=>{
    try {
        const data=await loginuser(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}