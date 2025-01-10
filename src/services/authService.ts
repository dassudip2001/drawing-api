import prisma from "../config/db";
import bcrypt from "bcrypt";
import { CreateUserInput, LoginUserInput } from "../validation/userValidation";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/sendEmail";

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

export const forgotPassword=async(email:string)=>{
  try {
    const user=await prisma.user.findUnique({
      where:{email:email}
    })
    if(!user){
      throw new Error("User not found")
    }
    const token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})
    // send email
    const resetUrl=`http://localhost:6000/api/v1/auth/reset-password/${token}`
    await sendEmail(user.email,"Reset Password",`Click here to reset your password ${resetUrl}`)
    return "Email sent successfully"
  }
  catch (error) {
    throw new Error(error);
  }
}

export const resetPassword=async(token:string,password:string)=>{
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { email: string };

    // Find the user by email
    const user = await prisma.user.findUnique({
        where: { email: decoded.email },
    });

    if (!user) {
        throw new Error('User not found');
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Update the user's password
    await prisma.user.update({
        where: { email: decoded.email },
        data: { password: hash },
    });

    return 'Password reset successfully';
} catch (error) {
    throw new Error(error.message);
}
}