import { Router } from "express";
import { login, register } from "../controllers/authController";
import { authLimiter } from "../config/rateLimit";
import { validate } from "../middlewares/validateRequest";
import { createUserSchema, loginSchema } from "../validation/userValidation";

const authRoute:Router=Router();

authRoute.post("/register",authLimiter, validate(createUserSchema), register);
authRoute.post("/login",authLimiter,validate(loginSchema), login);

export default authRoute;