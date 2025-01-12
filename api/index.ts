import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import categoryRoute from "../src/routes/categoryRoute";
import authR from "../src/routes/authRoutes";
import postRoute from "../src/routes/postRoutes";
import fileUploadRouter from "../src/routes/fileUploadRoute";
import morgan from "morgan";
const path = require("path");
import {logger,stream} from "../src/utils/logger";
import {requestLogger} from "../src/middlewares/requestLogger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
// Use request logger middleware
app.use(requestLogger);
 // Use Morgan for HTTP request logging
app.use(morgan('combined', { stream }));
// Middleware
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "..", "components", "home.htm"));
});

// Example usage in your routes
app.get('/example', (req, res) => {
  try {
    logger.info('Processing example request', { 
      path: req.path,
      query: req.query 
    });
    
    // Your route logic here
    res.json({ message: 'Success' });
    
    logger.debug('Example request completed');
  } catch (error) {
    logger.error('Error in example route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Routes
app.use("/api/v1", categoryRoute);
app.use("/api/v1/auth", authR);
app.use("/api/v1/", fileUploadRouter);
app.use("/api/v1/", postRoute);

// Example error handler
// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   Logger.error('Unhandled error:', err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// // Example usage in your routes
// app.get('/example', (req, res) => {
//   try {
//     logger.info('Processing example request', {
//       path: req.path,
//       query: req.query
//     });

//     // Your route logic here
//     res.json({ message: 'Success' });

//     logger.debug('Example request completed');
//   } catch (error) {
//     logger.error('Error in example route:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});

export default app;
