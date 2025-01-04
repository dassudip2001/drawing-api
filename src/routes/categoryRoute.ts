import { Router } from 'express';
import { all, create, destroy, find, update } from '../controllers/categoryController';
import { validate } from '../middlewares/validateRequest';
import { createCategorySchema, updateCategorySchema } from '../validation/categoryValidation';

const categoryRoute: Router = Router();
categoryRoute.get('/category', all);
categoryRoute.post('/category',validate(createCategorySchema),create);
categoryRoute.get('/category/:id', find);
categoryRoute.put('/category/:id',validate(updateCategorySchema),update);
categoryRoute.delete('/category/:id', destroy);

export default categoryRoute;
