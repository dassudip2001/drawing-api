import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs/promises";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your actual API secret
});

// Controller for uploading files
export const uploadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  try {
    // Upload file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      public_id: path.parse(req.file.originalname).name,
    });

    // Optimize URL
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: "auto",
      quality: "auto",
    });

    // Auto-crop URL
    const autoCropUrl = cloudinary.url(uploadResult.public_id, {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });

    // Delete the local file after uploading to Cloudinary
    await fs.unlink(req.file.path);

    // Send response
    res.status(200).json({
      uploadResult,
      optimizeUrl,
      autoCropUrl,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Failed to upload and transform image" });
  }
};
