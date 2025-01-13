import * as express from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { uploadFile } from "../controllers/fileUploadController";
import { Router } from 'express';

const fileUploadRouter = Router();

// Multer setup for file uploads

const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'uploads/');
  },
  filename: (_req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'));
  }
};

const upload = multer({ 
  storage, 
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
 });

// Define routes
fileUploadRouter.post("/upload", upload.single("file"), uploadFile);

export default fileUploadRouter;
