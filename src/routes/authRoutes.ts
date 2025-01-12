const express = require("express");
import {
  login,
  password,
  register,
  reset,
} from "../controllers/authController";
import { authLimiter } from "../config/rateLimit";
import { validate } from "../middlewares/validateRequest";
import { createUserSchema, loginSchema } from "../validation/userValidation";

const authRoute = express.Router();

authRoute.post("/register", authLimiter, validate(createUserSchema), register);
authRoute.post("/login", authLimiter, validate(loginSchema), login);
authRoute.post("/forgot-password", password);
authRoute.post("/reset-password/:token", reset);
export default authRoute;
