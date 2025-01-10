import { Request, Response } from 'express';
import { forgotPassword, loginuser, registerUser, resetPassword } from '../services/authService';
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

export const password=async(req:Request,res:Response)=>{
    try {
        const data=await forgotPassword(req.body.email);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
}

export const reset=async(req:Request,res:Response)=>{
    try {
        // Extract the token from the route parameter
        const { token } = req.params;

        // Extract the new password from the request body
        const { password } = req.body;
        const data=await resetPassword(token,password);
        res.json(data);
    } catch (error) {
        throw new Error(error);
    }
}