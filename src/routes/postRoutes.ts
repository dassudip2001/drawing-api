import { Router } from "express";
import {
  all,
  create,
  find,
  update,
  destroy,
} from "../controllers/postController";
import authMiddleware from "../middlewares/authMiddlewares";
import { validate } from "../middlewares/validateRequest";
import {
  createPostSchema,
  updatePostSchema,
} from "../validation/postValidation";

const PostRoute: Router = Router();
PostRoute.get("/posts", authMiddleware, all);
PostRoute.post("/posts", authMiddleware, validate(createPostSchema), create);
PostRoute.get("/posts/:id", authMiddleware, find);
PostRoute.put("/posts/:id", authMiddleware, validate(updatePostSchema), update);
PostRoute.delete("/posts/:id", authMiddleware, destroy);

export default PostRoute;
