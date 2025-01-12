import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/fileUploadController";

const fileUploadRouter: express.Router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Temporary storage location
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Define routes
fileUploadRouter.post("/upload", upload.single("file"), uploadFile);

export default fileUploadRouter;
