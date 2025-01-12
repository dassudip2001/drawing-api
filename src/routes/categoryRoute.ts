import { Router } from "express";
import {
  all,
  create,
  destroy,
  find,
  update,
} from "../controllers/categoryController";
import { validate } from "../middlewares/validateRequest";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../validation/categoryValidation";
import authMiddleware from "../middlewares/authMiddlewares";

const categoryRoute: Router = Router();

categoryRoute.get("/category",authMiddleware, all);
categoryRoute.post(
  "/category",
  authMiddleware,
  validate(createCategorySchema),
  create
);
categoryRoute.get("/category/:id", authMiddleware, find);
categoryRoute.put(
  "/category/:id",
  authMiddleware,
  validate(updateCategorySchema),
  update
);
categoryRoute.delete("/category/:id", authMiddleware, destroy);

export default categoryRoute;
