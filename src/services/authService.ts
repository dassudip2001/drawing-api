import prisma from "../config/db";
import bcrypt from "bcrypt";
import { CreateUserInput, LoginUserInput } from "../validation/userValidation";
import jwt from "jsonwebtoken";

export const registerUser=async(data:CreateUserInput)=>{

    try {
        const user = await prisma.user.findUnique({
            where: { email: data.email },
          });

        if (user) {
          throw new Error("User already exists");
        }
  
      //   * Encrypt the password
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
  
      
      await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
  
      return "User created successfully";
    } catch (error) {
        throw new Error(error);
    }
   
}


export const loginuser=async(data:LoginUserInput)=>{
    try {
        const user = await prisma.user.findUnique({
            where: { email: data.email },
          });
  
        if (!user) {
          throw new Error("User not found");
        }
  
        const passwordMatch = await bcrypt.compare(data.password, user.password);
  
        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        const JWTPayload = {
            id: user.id,
            name: user.name,
            email: user.email,
          };
      
          const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
            expiresIn: "365d",
          });
      
          const resPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
            token: `Bearer ${token}`,
          };
      
          return {
            status: 200,
            message: "Login successful",
            data: resPayload,
          }
    } catch (error) {
        throw new Error(error);
    }
}