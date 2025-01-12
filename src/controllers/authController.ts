import { NextFunction, Request, Response } from "express";
import {
  forgotPassword,
  loginuser,
  registerUser,
  resetPassword,
} from "../services/authService";
import { ApiError } from '../middlewares/errorHandler';

export const register = async (req: Request, res: Response,
  next: NextFunction

) => {
  try {
    const data = await registerUser(req.body);
    res.json(data);
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch categories'));

  }
};

export const login = async (req: Request, res: Response,
  next: NextFunction
) => {
  try {
    const data = await loginuser(req.body);
    res.json(data);
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch categories'));
    
  }
};

export const password = async (req: Request, res: Response,
  next: NextFunction
) => {
  try {
    const data = await forgotPassword(req.body.email);
    res.json(data);
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch categories'));

  }
};

export const reset = async (req: Request, res: Response,
  next: NextFunction
) => {
  try {
    // Extract the token from the route parameter
    const { token } = req.params;

    // Extract the new password from the request body
    const { password } = req.body;
    const data = await resetPassword(token, password);
    res.json(data);
  } catch (error) {
    next(new ApiError(500, 'Failed to fetch categories'));
    
  }
};
